import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacity',
  templateUrl: './privacity.page.html',
  styleUrls: ['./privacity.page.scss'],
})
export class PrivacityPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigateByUrl('/home');
  }
  goPrivacity(){
    this.router.navigateByUrl('/politic');
  }
  goPassword(){
    this.router.navigateByUrl('/password');
  }
}
