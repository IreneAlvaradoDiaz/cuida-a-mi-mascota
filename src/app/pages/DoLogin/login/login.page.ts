import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IUser } from 'src/app/model/iuser';
import { AdvertService } from 'src/app/services/advert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  password: string;
  email: string;
  remember: boolean;
  user: IUser[];

  constructor(private router: Router, public alertController: AlertController, private authService: AuthService) { }

  ngOnInit() {
  }
 
  register(){
    this.router.navigateByUrl('/register');
  }
  
  async goToHome(){
    const current = await this.authService.login(this.email, this.password);
    if(current) {
      this.router.navigateByUrl('home');
    }else{
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
