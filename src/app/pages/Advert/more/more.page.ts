import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/app/model/advert';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  segmentModel = "Recientes";
  segmentModel2 = "Recientes";
  adverts: Advert[];
  advertFilter = [];
  advertsNear = [];
  advert: Advert = {} as Advert;
  
  constructor(private router: Router, private advertService: AdvertService) { }

  ngOnInit() {
    this.advertService.getAllAdverts().then((data) => {
      this.adverts = data;
      this.advertFilter = this.adverts.filter(a => a.rateAvg >= 4); 
    }, err => console.error(err))

  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  goToInformation(id: string){
    this.router.navigateByUrl(`/adverts-info/${id}`);
  }
}
