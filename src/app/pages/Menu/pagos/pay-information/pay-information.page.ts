import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-information',
  templateUrl: './pay-information.page.html',
  styleUrls: ['./pay-information.page.scss'],
})
export class PayInformationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigateByUrl('/pagos');
  }
  goToPolitic(){
    this.router.navigateByUrl('/politic');
  }
}
