import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent implements OnInit {

  @Input() rate: number;

  constructor() { }

  ngOnInit() {

  }

}
