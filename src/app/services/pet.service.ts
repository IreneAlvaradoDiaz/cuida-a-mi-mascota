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
    const newDoc = doc(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pet`));
    pet.petId = newDoc.id;
    await setDoc(newDoc, pet);
  }

  getPets(): Observable<Pet[]>{
    return collectionData(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pet`), {idField: 'petId'}) as Observable<Pet[]>;
  }

  // getPet(id: string): Observable<Pet> {
  //   const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pet/${id}`);
  //   return docData(docRef,  {idField: 'petId'}) as Observable<Pet>;
  // }

  // async deletePet(id: string){ (PROXIMAMENTE)
  //   const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pet/${id}`);
  //   await deleteDoc(docRef);
  // }

  updatePet(pet: Pet) {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pet/${pet.petId}`);
    setDoc(docRef, pet);
  }  

}