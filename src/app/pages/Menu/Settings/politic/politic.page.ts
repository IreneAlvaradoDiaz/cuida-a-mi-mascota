import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politic',
  templateUrl: './politic.page.html',
  styleUrls: ['./politic.page.scss'],
})
export class PoliticPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  goToHome(){
    this.router.navigateByUrl('/privacity');
  }
}
