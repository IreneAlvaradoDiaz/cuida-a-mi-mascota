import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage {

  constructor(public router: Router) { }

  goToHome(){
    this.router.navigateByUrl('/home');
  }
  goToPayToggle(){
    this.router.navigateByUrl('/pay-toggle');
  }
  goToPayInformation(){
    this.router.navigateByUrl('/pay-information');
  }
}
