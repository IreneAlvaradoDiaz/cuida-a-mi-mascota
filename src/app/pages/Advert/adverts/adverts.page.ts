import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/app/model/advert';
import { IUser } from 'src/app/model/iuser';
import { AdvertService } from 'src/app/services/advert.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.page.html',
  styleUrls: ['./adverts.page.scss'],
})
export class AdvertsPage implements OnInit {

  imgUrl: string;
  adverts = [];
  advert: Advert = {} as Advert;
  user: IUser = {} as IUser;
  users: IUser[];

  constructor(private router: Router,
    private photoService: PhotoService, private AdvertService: AdvertService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
      this.user = this.users[0];
    });
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  
  async openCamera() {
    const foto = await this.photoService.takePicture();    
    this.adverts.push('data:image/jpeg;base64,' + foto);
    this.advert.photo = this.adverts[0];
  }

  saveAdverts(){
    this.advert.idUser = this.users[0].userId;
    this.AdvertService.addAdvert(this.advert);
    this.router.navigateByUrl('/account');
  }

}
