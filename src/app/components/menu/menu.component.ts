import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public router: Router, private menu: MenuController, private authService: AuthService) { }

  ngOnInit() {
  }

  LogOut(){
    this.router.navigateByUrl(`/login`);
    this.authService.logout();
  }
  goPrivacity(){
    this.router.navigateByUrl('/privacity');
  }

  goToProfile(){
    this.router.navigateByUrl('/account');
  }
  
}

