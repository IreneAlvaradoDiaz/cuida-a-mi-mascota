import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'firebase/auth';
import { IUser } from 'src/app/model/iuser';
import { AuthService } from 'src/app/services/auth.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute, private userService: UserService, private photoService: PhotoService) { }

  ngOnInit() {
  }
  
  email: string;
  pass: string;

  user: IUser = {} as IUser;
  users = [];

  async register(){
    if(await this.authService.register(this.user.email, this.user.pass)){
     this.userService.addUser(this.user); 
     this.router.navigateByUrl('/login');
    }else{
      console.log("error")
    }
  }
  goBack(){
    this.router.navigateByUrl('/login');
  }

  async openCamera() {
    const foto = await this.photoService.takePicture();    
    this.users.push('data:image/jpeg;base64,' + foto);
    this.user.photo = this.users[0];
  }
}
