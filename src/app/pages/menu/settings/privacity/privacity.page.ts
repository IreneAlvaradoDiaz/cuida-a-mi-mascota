import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IUser } from 'src/app/model/iuser';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-privacity',
  templateUrl: './privacity.page.html',
  styleUrls: ['./privacity.page.scss'],
})
export class PrivacityPage implements OnInit {

  constructor(public router: Router, private userService: UserService, private alertController: AlertController) { }
  user: IUser = {} as IUser

  ngOnInit() {
    // this.userService.getIUser().subscribe((data) => {
    //   this.user = data[0]
    // })
  }

  goToHome(){
    this.router.navigateByUrl('/home');
  }
  goPrivacity(){
    this.router.navigateByUrl('/politic');
  }

  // async alerterror() {
  //   const alert = await this.alertController.create({
  //     header: 'Eliminación de cuenta',
  //     message: '¿Estas seguro de eliminar la cuenta? Esta opción será <strong>PERMANENTE<strong>',
  //     buttons: [
  //       {
  //         text: 'Aceptar',
  //         id: 'Confirmación',
  //         handler: () => {
  //           this.userService.deleteUser(this.user.userId);
  //           this.router.navigateByUrl('/login')
  //         }
  //       },
  //       {
  //         text: 'Cancelar',
  //         id: 'Cancelación',
  //         handler: () => { console.log("Cancelado") }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }
}
