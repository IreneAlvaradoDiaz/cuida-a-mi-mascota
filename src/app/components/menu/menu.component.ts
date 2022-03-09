import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IUser } from 'src/app/model/iuser';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public router: Router, private menu: MenuController, private authService: AuthService, private userService: UserService) { }

  user: IUser = {} as IUser;

  ngOnInit() {
  }

  LogOut(){
    this.router.navigateByUrl(`/login`);
    this.authService.logout();
  }
  goPrivacity(){
    this.router.navigateByUrl('/privacity');
  }
  goLenguages(){
    this.router.navigateByUrl('/lenguages');
  }
  goPayment(){
    this.router.navigateByUrl('/pays');
  }

  goToProfile(){
    this.router.navigateByUrl('/account');
  }
  
}

