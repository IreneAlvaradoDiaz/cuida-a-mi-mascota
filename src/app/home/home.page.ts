import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Advert } from '../model/advert';
import { IUser } from '../model/iuser';
import { Pet } from '../model/pet';
import { AdvertService } from '../services/advert.service';
import { AdvertsNotPremiumService } from '../services/adverts-not-premium.service';
import { AuthService } from '../services/auth.service';
import { PetService } from '../services/pet.service';
import { UserService } from '../services/user.service';
import { AppLauncher } from '@capacitor/app-launcher';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  segmentModel = "Recientes";
  segmentModel2 = "Recientes";
  pet = {} as Pet;
  user: IUser = {} as IUser;
  adverts: Advert[] = [];
  advertRecent: Advert;
  advertFilter: Advert;
  advertOther: Advert[];

  constructor(public router: Router, private advertService: AdvertService, private userService: UserService, public authService: AuthService, private alertController: AlertController, private petService: PetService, private advertNotPremium: AdvertsNotPremiumService) {}
  
  ngOnInit() {
    this.userService.getIUser().subscribe((data) => {
      console.log(data)
      this.user = data[0];
      console.log(this.user)
    }, (err) => console.error(err));

    this.advertService.getAllAdverts().then((data) => {
      this.adverts = data.sort((a1 , a2) => (- a1.create_At - (- a2.create_At)));
      
      if( this.adverts.length ) {
        this.advertRecent = this.adverts[0];

        console.log(this.adverts);
        const filtered = this.adverts.filter(a => a.rate[0] >= 4);
        if( filtered.length ) this.advertFilter = filtered[Math.floor(Math.random()*(filtered.length - 1))];
      }

    }, err => console.error(err))

    this.advertNotPremium.getAdvertsFromStorage().then(data => {
      console.log(data);
      this.advertOther = data;
    })
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

  
  async openApp(){
    await AppLauncher.openUrl({ url: 'com.example.mipequeodiario' });
  };

}
