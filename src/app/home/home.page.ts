import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  segmentModel = "Recientes";
  segmentModel2 = "Recientes";
  

  constructor(public router: Router) {}

  goToAdvert(){
    this.router.navigateByUrl('/advert');
  }
  
}
