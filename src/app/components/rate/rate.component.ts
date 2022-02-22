import { Component, Input, OnInit } from '@angular/core';
import { Advert } from 'src/app/model/advert';
import { AdvertService } from 'src/app/services/advert.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent implements OnInit {

  @Input() adverts: Advert[];

  advert: Advert = {} as Advert;

  constructor(private advertService: AdvertService) { }

  ngOnInit() {
    this.advertService.getAdverts().subscribe(data => {
      this.adverts = data;
      this.adverts[0] = this.advert;
      console.log(this.advert)
    })
  }

}
