import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Advert } from '../model/advert';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

  async addAdvert(advert: Advert){
    await addDoc(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts`), advert);
  }

  getAdverts(): Observable<Advert[]>{
    return collectionData(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts`), {idField: 'id'}) as Observable<Advert[]>;
  }

  getAdvert(id: string): Observable<Advert> {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts/${id}`);
    return docData(docRef,  {idField: 'id'}) as Observable<Advert>;
  }

  async deleteAdvert(id: string){
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts/${id}`);
    await deleteDoc(docRef);
  }

  updateAdverts(advert: Advert) {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Adverts/${advert.id}`);
    setDoc(docRef, advert);
  }
  
}
