import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { docData } from 'rxfire/firestore';
import { AuthService } from './auth.service';
import { Pet } from '../model/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

  async addPet(pet: Pet){
    await addDoc(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pet`), pet);
  }

  getPets(): Observable<Pet[]>{
    return collectionData(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pet`), {idField: 'petId'}) as Observable<Pet[]>;
  }

  getPet(id: string): Observable<Pet> {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pet/${id}`);
    return docData(docRef,  {idField: 'petId'}) as Observable<Pet>;
  }

  async deletePet(id: string){
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pet/${id}`);
    await deleteDoc(docRef);
  }

  updatePet(advert: Pet) {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pet/${advert.petId}`);
    setDoc(docRef, advert);
  }
}