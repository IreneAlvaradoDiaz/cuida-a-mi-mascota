import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Advert } from 'src/app/model/advert';
import { IUser } from 'src/app/model/iuser';
import { AdvertService } from 'src/app/services/advert.service';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  
  constructor(private router: Router, public adverts: AdvertService, public user: UserService, public alertController: AlertController) { }
  User: IUser;
  usuario: IUser =  this.user.userLogged;

  ngOnInit() {
    console.log(this.adverts.getAdverts())
  }

  goToHome(){
    this.router.navigateByUrl('/home');
  }
  getAdverts(){
    this.adverts.getAdverts();
  }

  deleteAdvert(id: number) {
    this.adverts.deleteAdverts(id);
  }

  async presentAlertConfirm(t: Advert) {
    console.log('alerta');
    const alert = await this.alertController.create({
      header: 'Borrar tarea',
      message: `¿Estás seguro que quieres borrar el anuncio <strong> ${t.title} </strong>?`,

      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Aceptar',
        handler: () => {
          this.deleteAdvert(t.id);
          console.log('Confirm Okay');
        }
      }
    ]
  });
    await alert.present();
  }
}
