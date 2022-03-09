import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { IPay } from '../model/ipay';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

//buscar manera de hacerlo con PAYPAL

  async addPay(pay: IPay){
    const newDoc = doc(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pay`));
    pay.id = newDoc.id;
    await setDoc(newDoc, pay);
  }

  getPays(): Observable<IPay[]>{
    return collectionData(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pay`), {idField: 'id'}) as Observable<IPay[]>;
  }

  getPay(id: string): Observable<IPay> {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pay/${id}`);
    return docData(docRef,  {idField: 'id'}) as Observable<IPay>;
  }

  async deletePay(id: string){
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pay/${id}`);
    await deleteDoc(docRef);
  }

  updatePay(pay: IPay) {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pay/${pay.id}`);
    setDoc(docRef, pay);
  }
  
}