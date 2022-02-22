import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/app/model/advert';
import { IUser } from 'src/app/model/iuser';
import { AdvertService } from 'src/app/services/advert.service';
import { UserService } from 'src/app/services/user.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-adverts-post',
  templateUrl: './adverts-post.component.html',
  styleUrls: ['./adverts-post.component.scss'],
})
export class AdvertsPostComponent implements OnInit {
  
  @Input() adverts: Advert[];

  @Output()
  idOutput = new EventEmitter();

  constructor(private router: Router, public userService: UserService, public advertService: AdvertService) { }

  ngOnInit() {
  }

  sayToParent(message) {
    
  }

  

}
