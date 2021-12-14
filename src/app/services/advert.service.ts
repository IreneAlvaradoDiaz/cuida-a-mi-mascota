import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Advert } from '../model/advert';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  adverts: Advert[] = [];
  advertCounter: number = 0;

  constructor() {
    this.getAdvertsFromStorage().then(data => this.adverts = data);
    this.getAdvertsCounterFromStorage().then(data => this.advertCounter = data);
   }

  async saveAdverts(advert: Advert): Promise<boolean> {
    if (advert.id == undefined) {
      advert.id = this.advertCounter++;
      this.adverts.push(advert)
    } else {
      this.deleteAdverts(advert.id);
      this.adverts.push(advert);
    }

    await this.saveAdvertsIntoStorage();
    await this.saveAdvertsCounterIntoStorage();

    return true;
  }

  deleteAdverts(id: number) {
    this.adverts = this.adverts.filter(t => t.id != id);
  }
  getAdverts(): Observable<Advert[]> {
    return of(this.adverts);
  }

  getAdvert(id: number): Observable<Advert> {
    const advert = this.adverts.filter(t => t.id === id)[0];
    const newAdvert = Object.assign({}, advert)
    return of(newAdvert);
  }

  async getAdvertsFromStorage(): Promise<Advert[]> {
    const ret = await Storage.get({ key: 'adverts' });
    return JSON.parse(ret.value) ? JSON.parse(ret.value): [];
  }

  async getAdvertsCounterFromStorage(): Promise<number> {
    const tc = await Storage.get({ key: 'advertsCounter' }); //ponemos await cuando el metodo es una promesa u observable(?) ya que es un metodo que hace que esperemos por los resultados, entoces marcaremos que esperaremos a que tengamos el resultado para poder seguir con el resto del código.
    console.log("advertsCounter: " + JSON.stringify(tc.value));
    return Number.isInteger(+tc.value) ? +tc.value: 0; //poneindo un + se combierte de un string a un number
  }

  async saveAdvertsIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'adverts',
      value: JSON.stringify(this.adverts),
    })
    return true;
  }

  async saveAdvertsCounterIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'advertsCounter',
      value: '' + this.advertCounter,
    })

    return true;
  }
}
