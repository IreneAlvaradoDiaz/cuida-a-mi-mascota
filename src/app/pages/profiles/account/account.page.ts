import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { parse } from 'date-fns';
import { Advert } from 'src/app/model/advert';
import { IUser } from 'src/app/model/iuser';
import { AdvertService } from 'src/app/services/advert.service';
import { AuthService } from 'src/app/services/auth.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  
  constructor(private router: Router, private toastController: ToastController, private photoService: PhotoService, public advertService: AdvertService, public authService: AuthService, public alertController: AlertController, private userService: UserService) {}

  user: IUser = {} as IUser;
  adverts: Advert[];

  ngOnInit() {
    this.userService.getIUser().subscribe((data) => {
      console.log(data)
      this.user = data[0];
    }, (err) => console.error(err));

    this.advertService.getAdverts().subscribe((data) => {
      this.adverts = data;
    })
    this.user.edit = false;

  }

  goToHome(){
    this.router.navigateByUrl('/home');
  }

  deleteAdvert(id: string) {
    this.advertService.deleteAdvert(id);
  }

  edit(){
    this.user.edit = true;
  }

  save(){
    this.user.edit = false;
    this.userService.updateUser(this.user);
    this.presentToast();
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

  async openCamera() {
    const doPhoto = await this.photoService.takePicture();    
    const uploadPhoto = await this.photoService.uploadFile(doPhoto, `Users/${this.user.nombre} ${this.user.apellidos}`);
    this.user.photo = uploadPhoto;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cambios guardados',
      duration: 2000
    });
    toast.present();
  }

  edad(): number{
    const today: Date = new Date();
    const birthDate: Date = new Date(Date.parse(this.user.fechaNacimiento));
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }


}