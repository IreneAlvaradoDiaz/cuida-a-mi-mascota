import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, deleteDoc, doc, setDoc, collectionGroup, query, where } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Comment } from '../model/comment';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

  async addComment(comment: Comment) {
    const newDoc = doc(collection(this.firestore, `users/${this.authService.getCurrentUser().uid}/Comments`));
    comment.id = newDoc.id;
    await setDoc(newDoc, comment);
  }

  getComments(id: string): Promise<Comment[]> {
    return new Promise(resolve => {
      (collectionData(query(collectionGroup(this.firestore, `Comments`), where('idAdvert', "==", id)), { idField: 'id' }) as Observable<Comment[]>).subscribe(data => {
        resolve(data);
      });
    });
  }

  async deleteComment(id: string) {
      const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Comments/${id}`);
      await deleteDoc(docRef);
    }

    updateComments(comment: Comment) {
      const docRef = doc(this.firestore, `users/${this.authService.getCurrentUser().uid}/Comments/${comment.id}`);
      setDoc(docRef, comment);
    }

  }
