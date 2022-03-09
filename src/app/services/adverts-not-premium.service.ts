import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Advert } from '../model/advert';


@Injectable({
  providedIn: 'root'
})
export class AdvertsNotPremiumService {

  adverts: Advert[] = [];

  constructor() { 
    this.adverts = [
      {
        id: "0",
        photo:"https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
        title: "Paseo a tus perros todas las tardes",
        description: "Me encanta pasar tiempo con los animales, ¿y que mejor manera que sacandolos a pasea?, estoy libre por las tardes y me gusta pasar el tiempo al aire libre, por lo que me encantaria que tu mascota me acompañase en mi paseo",
        location: "Albaida del Aljarafe, Sevilla"
    },
    {
        id: "1",
        photo:"https://cdn-icons-png.flaticon.com/512/194/194938.png",
        title: "Necesito alguien quien cuide a mis lagartos este fin de semana",
        description: "Este fin de semana tengo que viajar fuera de Madrid por viaje de negocios, no puedo dejar a mis lagartos tantos dias solo, son solo dos, y lo unico que necesita es un poco de compañía y que lo alimenten a su debido momento, muchas gracias",
        location: "Alcalá de Henares, Madrid"
    },
    {
        id: "2",
        photo:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images-HD.png",
        title: "Busco cuidador que cuide mis perros en semana blanca",
        description: "Me encuentro de viaje esta semana blanca, desgraciadamente no puedo llevar conmigo a mis perros, por lo que necesito que alguien los cuide en mi ausencia",
        location: "Málaga, Málaga"
    },
    {
        id: "2",
        photo:"https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png",
        title: "Disponible para cuidar cualquier tipo de mascota",
        description: "Cuido a tu mascota, tengo conocimiento de veterinario por lo que conmigo tus animales se encontrará en buenas manos, tengo disponibilidad completa gracias a mi turno de trabajo.",
        location: "Bilbao, País Vasco"
    }
    ]
    this.saveAdvertsIntoStorage()
    this.getAdvertsFromStorage().then(data => this.adverts = data);
  }

  async getAdvertsFromStorage(): Promise<Advert[]> {
    const ret = await Storage.get({ key: 'adverts' });
    return JSON.parse(ret.value) ? JSON.parse(ret.value): [];
  }

  async saveAdverts(advert: Advert) {
    this.adverts.push(advert);
    await this.saveAdvertsIntoStorage();
  }

  async saveAdvertsIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'adverts',
      value: JSON.stringify(this.adverts),
    })
    return true;
  }
}
