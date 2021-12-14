import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Advert } from 'src/app/model/advert';
import { IUser } from 'src/app/model/iuser';
import { AdvertService } from 'src/app/services/advert.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.page.html',
  styleUrls: ['./advert.page.scss'],
})
export class AdvertPage implements OnInit {

  imgUrl: string;
  adverts = [];
  // usuario: IUser[]
  advert: Advert = {id: null, idUser: null, photo: '', title: '', description: ''};

  constructor(private router: Router,
    private photoService: PhotoService, private AdvertService: AdvertService, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id != null){
      this.AdvertService.getAdvert(+id).subscribe(
        data => this.advert = data
      )
    }
    // this.usuario = this.userService.users
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  async openCamera() {
    const foto = await this.photoService.takePicture();    
    this.adverts.push('data:image/jpeg;base64,' + foto);
  }
  saveAdverts(){
    // this.advert.idUser = this.usuario[0].id;
    this.AdvertService.saveAdverts(this.advert);
    this.router.navigateByUrl('/account');
  }

}
