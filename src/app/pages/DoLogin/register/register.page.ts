import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IUser } from 'src/app/model/iuser';
import { AuthService } from 'src/app/services/auth.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';
import { RegisterSelectionPage } from '../register-selection/register-selection.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router,private alertController: AlertController, private authService: AuthService, private activatedRoute: ActivatedRoute, private userService: UserService, private photoService: PhotoService) { }
  
  user: IUser = {} as IUser;
  users = [];
  
  ngOnInit() {
    const type = this.activatedRoute.snapshot.paramMap.get('type');
    this.user.type = type;
    console.log(this.user)
  }

  email: string;
  pass: string;
  
  async register() {
    if (!this.user.nombre || !this.user.apellidos || !this.user.edad || !this.user.email || !this.user.pass || !this.user.sexo || this.user.type == null) {
      this.alerterror();
    } else {
      if (await this.authService.register(this.user.email, this.user.pass)) {
        this.userService.addUser(this.user);
        this.router.navigateByUrl('/login');
      } else {
        this.alertErrorEmail()
      }
    }

  }
  goBack() {
    this.router.navigateByUrl('/register-selection');
  }

  async openCamera() {
    const foto = await this.photoService.takePicture();
    this.users.push(foto);
    this.user.photo = this.users[0];
  }

  async alerterror() {
    const alert = await this.alertController.create({
      header: 'Error en la creación de usuario',
      message: 'Has dejado alguno de los campos obligatorios vacio',
      buttons: ['De acuerdo']
    });
    await alert.present();
  }

  async alertErrorEmail() {
    const alert = await this.alertController.create({
      header: 'Error en la creación de usuario',
      message: 'Has introducido un email ya existente',
      buttons: ['De acuerdo']
    });
    await alert.present();
  }

}
