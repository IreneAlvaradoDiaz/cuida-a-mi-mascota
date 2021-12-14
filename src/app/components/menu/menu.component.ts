import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public router: Router, private menu: MenuController) { }

  ngOnInit() {}

  LogOut(){
    this.router.navigateByUrl('/login');
  }
  goPrivacity(){
    this.router.navigateByUrl('/privacity');
  }
  goLenguages(){
    this.router.navigateByUrl('/idiomas');
  }
  goPayment(){
    this.router.navigateByUrl('/pagos');
  }
  goToProfile(){
    this.router.navigateByUrl('/account');
  }
  

}
