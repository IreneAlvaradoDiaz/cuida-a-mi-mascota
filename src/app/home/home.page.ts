import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Advert } from '../model/advert';
import { IUser } from '../model/iuser';
import { Pet } from '../model/pet';
import { AdvertService } from '../services/advert.service';
import { AuthService } from '../services/auth.service';
import { PetService } from '../services/pet.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  segmentModel = "Recientes";
  segmentModel2 = "Recientes";
  pet = {} as Pet;
  user: IUser;
  adverts: Advert[];
  advert = [];
  advertFilter = [];
  advertsNear = [];  

  constructor(public router: Router, private advertService: AdvertService, private userService: UserService, public authService: AuthService, private alertController: AlertController, private petService: PetService) {}
  
  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data)
      this.user = data[0];
    }, (err) => console.error(err));

    this.advertService.getAllAdverts().then((data) => {
      this.adverts = data;
      this.advert[0] = this.adverts[Math.floor(Math.random()*this.adverts.length)];
      this.advertsNear = this.advert.sort((a1 , a2) => (- a1.create_At - (- a2.create_At)));
      this.advertFilter = this.adverts.filter(a => a.rate >= 4); 
    }, err => console.error(err))
  }

  goToAdvert(){
    this.router.navigateByUrl('/adverts');
  }
  
  goToFeature(){
    this.router.navigateByUrl('/more');
  }

  goToInformation(id: string){
    this.router.navigateByUrl(`/adverts-info/${id}`);
  }

  goToProfile(){
    this.router.navigateByUrl('/account');
  }
  
  goToProfilePet(){
    if(this.user.type != 'dueño'){
      this.presentAlertConfirm(this.pet);
    }else{
      this.router.navigateByUrl('/profile-pets');
    }
    
  }

  async presentAlertConfirm(t: Pet) {
    console.log('alerta');
    const alert = await this.alertController.create({
      header: 'Perfil cerrado',
      message: `Necesitas ser dueño para acceder a esta opción, si quieres cambiar la opción a dueño ve a opciones`,

      buttons: [{
        text: 'Aceptar',
        role: 'Cancel'
      },
    ]
  });
    await alert.present();
    this.router.navigateByUrl('/home');
  }
}
