import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { docData } from 'rxfire/firestore';
import { AuthService } from './auth.service';
import { IUser } from '../model/iuser';
import { Pet } from '../model/pet';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

  async addUser(user: IUser){
    await addDoc(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/iuser`), user);
  }

  getUsers(): Observable<IUser[]>{
    return collectionData( collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/iuser`), 
    {idField: 'userId'}) as Observable<IUser[]>;
  }

  getUser(id: string): Observable<IUser> {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/iuser/${id}`);
    return docData(docRef,  {idField: 'userId'}) as Observable<IUser>;
  }

  async deleteUser(id: string){
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/iuser/${id}`);
    await deleteDoc(docRef);
  }

  updateUser(user: IUser) {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/iuser/${user.userId}`);
    setDoc(docRef, user);
  }  

  updatePet(pet: Pet) {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Pet/${pet.petId}`);
    setDoc(docRef, pet);
  }  

}
