import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IUser } from 'src/app/model/iuser';
import { AdvertService } from 'src/app/services/advert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  password: number;
  email: string;
  remember: boolean;
  user: IUser[];

  constructor(private router: Router, public alertController: AlertController, private userService: UserService, private advertService: AdvertService) { }

  ngOnInit() {
  }
 
  register(){
    this.router.navigateByUrl('/register');
  }
  
  async goToHome(){
    let encontrado = false;    
    let listUsers = this.userService.users
    for (let i = 0; i < listUsers.length; i++) {
      if((listUsers[i].password == this.password) && (listUsers[i].email == this.email)){
        this.userService.setUser(listUsers[i])
        encontrado = true;
        this.router.navigateByUrl('/home');
      }
    }
    if(!encontrado){
      this.alerterror();
    }
  }

  async alerterror(){
    const alert = await this.alertController.create({
      header: 'Error de autentificación',
      message: 'Contrasña o email incorrecto, vuelve a introducirlos',
      buttons: ['De acuerdo']
    });
    await alert.present();
  }
}
