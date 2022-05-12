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
    const newDoc = doc(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/iuser`));
    user.userId = newDoc.id;
    await setDoc(newDoc, user);
  }

  getIUser(): Observable<IUser[]>{
    return collectionData( collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/iuser`), 
    {idField: 'userId'}) as Observable<IUser[]>;
  }

  // async deleteUser(id: string){
  //   const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/iuser/${id}`);
  //   await deleteDoc(docRef);
  // }

  updateUser(user: IUser) {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/iuser/${user.userId}`);
    setDoc(docRef, user);
  }  

}
