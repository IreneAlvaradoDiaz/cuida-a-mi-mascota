import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lenguages',
  templateUrl: './lenguages.page.html',
  styleUrls: ['./lenguages.page.scss'],
})
export class LenguagesPage implements OnInit {

  constructor(public router: Router) { }

  miBuscador:string;

  ngOnInit() {
  }

  goToHome(){
    this.router.navigateByUrl('/home');
  }
}
