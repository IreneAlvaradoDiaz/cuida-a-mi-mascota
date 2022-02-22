import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, setDoc, collectionGroup } from 'firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Advert } from '../model/advert';
import { Comment } from '../model/comment';
import { IUser } from '../model/iuser';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

  async addComment(comment: Comment) {
    await addDoc(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Comments`), comment);
  }

  getComments(): Observable<Comment[]> {
    return collectionData(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Comments`), { idField: 'id' }) as Observable<Comment[]>;
  }

  async deleteComment(id: string) {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Comments/${id}`);
    await deleteDoc(docRef);
  }

  updateComments(comment: Comment) {
    const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Comments/${comment.id}`);
    setDoc(docRef, comment);
  }

  getAllComments(): Promise<Advert[]> {
    return new Promise( resolve => {
      let users: {[key: string]: IUser} = {};
      let comments: {[key: string]: Comment} = {};

      (collectionData(collectionGroup(this.firestore, `iuser`), { idField: 'userId' }) as Observable<IUser[]>).subscribe( data => {
        data.forEach(u => users[u.userId] = u);

        (collectionData(collectionGroup(this.firestore, 'Adverts/Comments'), { idField: 'id' }) as Observable<Comment[]>).subscribe(data => {
          data.forEach(u => comments[u.id] = u);
        });

        (collectionData(collectionGroup(this.firestore, `Adverts`), { idField: 'id' }) as Observable<Advert[]>).subscribe( data => {
          resolve(data.map( a => {
               return { nameUser: users[a.idUser], comment: comments[a.id], ...a }; // copiamos los campos dentro del anuncio
            }));
        });
      });
    });
  }
}
