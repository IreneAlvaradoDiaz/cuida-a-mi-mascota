import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, User, UserCredential } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private auth: Auth) { }

  login(email: string, pass: string): Promise<boolean> {
    return signInWithEmailAndPassword(this.auth, email, pass).then(
      data => {
        return true;
      },
      error => {
        console.error(error);
        return false;
      }
    );
  }

  getCurrentUser(): User {
    return getAuth().currentUser;
  }

  logout(){
    signOut(this.auth);
  }

  register(email: string, pass: string): Promise<boolean> {
    return createUserWithEmailAndPassword(this.auth, email, pass).then(
      () => true,
      () => false
    );
  }

  resetPass(email: string): Promise<void>{
    return sendPasswordResetEmail(this.auth, email);
  }
}