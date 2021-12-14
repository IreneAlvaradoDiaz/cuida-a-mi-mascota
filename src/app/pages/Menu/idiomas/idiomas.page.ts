import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.page.html',
  styleUrls: ['./idiomas.page.scss'],
})
export class IdiomasPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigateByUrl('/home');
  }
}
