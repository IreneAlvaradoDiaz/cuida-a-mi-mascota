import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, setDoc, collectionGroup } from 'firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Advert } from '../model/advert';
import { IUser } from '../model/iuser';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

  async addAdvert(advert: Advert) {
    await addDoc(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts`), advert);
  }

  getAdverts(): Observable<Advert[]> {
    return collectionData(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts`), { idField: 'id' }) as Observable<Advert[]>;
  }

  getAdvert(id: string): Observable<Advert> {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts/${id}`);
    return docData(docRef, { idField: 'id' }) as Observable<Advert>;
  }

  async deleteAdvert(id: string) {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts/${id}`);
    await deleteDoc(docRef);
  }

  updateAdverts(advert: Advert) {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts/${advert.id}`);
    setDoc(docRef, advert);
  }

  getAllAdverts(): Promise<Advert[]> {
    return new Promise( resolve => {
      let users: {[key: string]: IUser} = {};

      (collectionData(collectionGroup(this.firestore, `iuser`), { idField: 'userId' }) as Observable<IUser[]>).subscribe( data => {
        data.forEach(u => users[u.userId] = u);

        (collectionData(collectionGroup(this.firestore, `Adverts`), { idField: 'id' }) as Observable<Advert[]>).subscribe( data => {
          resolve(data.map( a => {
               return { nameUser: users[a.idUser], ...a }; // copiamos los campos dentro del anuncio
            }));
        });
      });
    });
  }

}
