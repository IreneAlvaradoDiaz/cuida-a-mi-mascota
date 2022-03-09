import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/app/model/advert';
import { AdvertService } from 'src/app/services/advert.service';
import { UserService } from 'src/app/services/user.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adverts-post',
  templateUrl: './adverts-post.component.html',
  styleUrls: ['./adverts-post.component.scss'],
})
export class AdvertsPostComponent implements OnInit {
  
  @Input() adverts?: Advert[] | Advert;

  @Output() clickAdvert: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router, public userService: UserService, public advertService: AdvertService) { }

  ngOnInit() {
  }

  sayToParent(id: string) {
    this.clickAdvert.emit(id);
  }

  getAdverts(){
    if( this.adverts )
      return Array.isArray(this.adverts) ? this.adverts : [this.adverts];
    else return [];
  }

}
