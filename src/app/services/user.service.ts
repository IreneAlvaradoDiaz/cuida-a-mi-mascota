import { Injectable } from '@angular/core';
import { IUser } from '../model/iuser';
import { Storage } from '@capacitor/storage';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [];
  userCounter: number = 1;
  userLogged: IUser;

  constructor() {
    this.getUsersFromStorage().then(data => this.users = data);
    
  }
  async saveUser(user: IUser): Promise<boolean> {
    if (user.id == undefined) {
      user.id = this.userCounter++;
      console.log(user.id);
      this.users.push(user);
    } else {
      this.deleteUser(user.id);
      this.users.push(user);
    }

    await this.saveUsersIntoStorage();
    await this.saveUsersCounterIntoStorage();

    return true;
  }

  deleteUser(id: number) {
    this.users = this.users.filter(t => t.id != id);
  }

  getUser(): Observable<IUser[]> {
    return of(this.users);
  }

  getUsers(id: number): Observable<IUser> {
    const user = this.users.filter(t => t.id === id)[0];
    const newUser = Object.assign({}, user)
    return of(newUser);
  }
  
  setUser(user: IUser){
    this.userLogged = user;
  }

  //coger a los usuarios guardados en la base de datos local para poder mostrarlos
  async getUsersFromStorage(): Promise<IUser[]> {
    const ret = await Storage.get({ key: 'users' });
    return JSON.parse(ret.value) ? JSON.parse(ret.value): [];
  }

  async getUsersCounterFromStorage(): Promise<number> {
    const tc = await Storage.get({ key: 'usersCounter' }); //ponemos await cuando el metodo es una promesa u observable(?) ya que es un metodo que hace que esperemos por los resultados, entoces marcaremos que esperaremos a que tengamos el resultado para poder seguir con el resto del código.
    console.log("usersCounter: " + JSON.stringify(tc.value));
    return Number.isInteger(+tc.value) ? +tc.value: 0; //poneindo un + se combierte de un string a un number
  }



  //guardar a los usuarios en la base de datos local
  async saveUsersIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'users',
      value: JSON.stringify(this.users),
    })
    return true;
  }

  async saveUsersCounterIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'usersCounter',
      value: '' + this.userCounter,
    })

    return true;
  }


}
