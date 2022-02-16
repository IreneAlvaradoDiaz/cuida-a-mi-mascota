import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Pet } from '../model/pet';
import { AuthService } from '../services/auth.service';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  segmentModel = "Recientes";
  segmentModel2 = "Recientes";
  pet = {} as Pet;

  constructor(public router: Router, public authService: AuthService, private alertController: AlertController, private petService: PetService) {}

  goToAdvert(){
    this.router.navigateByUrl('/adverts');
  }
  
  goToFeature(){
    this.router.navigateByUrl('/more');
  }

  goToMore(){
    this.router.navigateByUrl('/more');
  }

  goToInformation(){
    this.router.navigateByUrl('/adverts-info');
  }
  goToProfile(){
    this.router.navigateByUrl('/account');
  }
  goToProfilePet(){
    // if(this.pet.nombre != null){
    //   this.router.navigateByUrl('/profile-pets');
    // }else{
    //   this.presentAlertConfirm(this.pet);
    // }
    
    this.router.navigateByUrl('/profile-pets');
    
  }

  async presentAlertConfirm(t: Pet) {
    console.log('alerta');
    const alert = await this.alertController.create({
      header: 'Perfil vacio',
      message: `Necesitas registrar un animal para poder ver el perfil. Si deseas registrar un animal se puede hacer desde el perfil de usuario`,

      buttons: [{
        text: 'Aceptar',
        role: 'cancel',
      },
    ]
  });
    await alert.present();
  }
}
