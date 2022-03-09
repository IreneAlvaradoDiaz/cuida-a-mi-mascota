import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore } from '@angular/fire/firestore';
import { query, where, addDoc, collection, deleteDoc, doc, setDoc, collectionGroup, FieldPath, getDocs } from 'firebase/firestore';
import { promise } from 'protractor';
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
    const newDoc = doc(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts`));
    advert.id = newDoc.id;
    await setDoc(newDoc, advert);
  }

  getAdverts(): Observable<Advert[]> {
    return collectionData(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts`), { idField: 'id' }) as Observable<Advert[]>;
  }

  getAdvert(id: string): Promise<Advert | null> {
    return new Promise( resolve => {
      (collectionData(query(collectionGroup(this.firestore, `Adverts`), where('id', "==", id)), { idField: 'id' }) as Observable<Advert[]>).subscribe( data => {
        const advert = data.length ? data[0] : null;
        console.log(data, id);

        if( advert ){
          (collectionData(query(collectionGroup(this.firestore, `iuser`), where("userId", "==", advert.idUser)), { idField: 'userId' }) as Observable<IUser[]>).subscribe( data => {
            if( data.length ) advert.nameUser = data[0];

            resolve(advert);
          });
        } else resolve(null);
      });
    });
  }

  async deleteAdvert(id: string) {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts/${id}`);
    await deleteDoc(docRef);
  }
  
  // updateMyAdverts(advert: Advert){ (PROXIMAMENTE)
  //   const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts/${advert.id}`);
  //   setDoc(docRef, advert);
  // }

  updateAdverts(advert: Advert): Promise<void> {
    return getDocs(query(collectionGroup(this.firestore, `Adverts`), where('id', "==", advert.id))).then(result => {
      result.forEach(r => setDoc(r.ref, advert));
    })
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
