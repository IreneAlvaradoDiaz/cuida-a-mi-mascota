import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/app/model/advert';
import { IUser } from 'src/app/model/iuser';
import { AdvertService } from 'src/app/services/advert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adverts-info',
  templateUrl: './adverts-info.page.html',
  styleUrls: ['./adverts-info.page.scss'],
})
export class AdvertsInfoPage implements OnInit {

  imgUrl: string;
  adverts = [];
  advert: Advert = {} as Advert;
  user: IUser = {} as IUser;
  users: IUser[];

  constructor(private router: Router, private AdvertService: AdvertService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
      this.user = this.users[0];
    });

    this.AdvertService.getAdverts().subscribe((data) => {
      this.adverts = data;
      this.advert = this.adverts[0];
    });
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }
}
