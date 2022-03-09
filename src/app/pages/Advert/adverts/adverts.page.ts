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
  advert: Advert = {rate: []} as Advert;
  user: IUser = {} as IUser;

  constructor(private router: Router,
    private photoService: PhotoService, private AdvertService: AdvertService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getIUser().subscribe((data) => {
      this.user = data[0];
    });
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  
  async openCamera() {
    const doPhoto = await this.photoService.takePicture();    
    const uploadPhoto = await this.photoService.uploadFile(doPhoto, `Adverts/${this.user.nombre} ${this.user.apellidos}`);
    this.advert.photo = uploadPhoto;
  }

  saveAdverts(){
    this.advert.create_At = new Date;
    this.advert.idUser = this.user.userId;
    this.advert.nameUser = this.user;
    this.AdvertService.addAdvert(this.advert);
    this.router.navigateByUrl('/account');
  }

}
