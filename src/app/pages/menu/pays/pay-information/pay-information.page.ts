import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPay } from 'src/app/model/ipay';
import { IUser } from 'src/app/model/iuser';
import { PayService } from 'src/app/services/pay.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pay-information',
  templateUrl: './pay-information.page.html',
  styleUrls: ['./pay-information.page.scss'],
})
export class PayInformationPage implements OnInit {

  constructor(private router: Router, private payService: PayService, private userService: UserService) { }

  pay = {} as IPay;
  pays: IPay[];
  user = {} as IUser;
  users: IUser[];

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
      this.user = this.users[0];
    });
  }

  goToHome(){
    this.router.navigateByUrl('/home');
  }

  goToPolitic(){
    this.router.navigateByUrl('/politic');
  }

  saveFormPay(){
    this.pay.idUser = this.users[0].userId;
    this.payService.addPay(this.pay);
    this.router.navigateByUrl('/pays');
  }
}
