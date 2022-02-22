import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Advert } from 'src/app/model/advert';
import { IUser } from 'src/app/model/iuser';
import { AdvertService } from 'src/app/services/advert.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  
  constructor(private router: Router, public advertService: AdvertService, public authService: AuthService, public alertController: AlertController, private userService: UserService) {}

  user: IUser = {} as IUser;
  adverts: Advert[];

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data)
      this.user = data[0];
    }, (err) => console.error(err));

    this.advertService.getAdverts().subscribe((data) => {
      this.adverts = data;
    })


  }

  goToHome(){
    this.router.navigateByUrl('/home');
  }

  deleteAdvert(id: string) {
    this.advertService.deleteAdvert(id);
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

  registrarMascota(){
    this.router.navigateByUrl("/register-pets");
  }
}