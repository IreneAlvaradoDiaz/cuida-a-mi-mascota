import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPay } from 'src/app/model/ipay';
import { IUser } from 'src/app/model/iuser';
import { PayService } from 'src/app/services/pay.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.page.html',
  styleUrls: ['./pays.page.scss'],
})
export class PaysPage implements OnInit{

  pay = {} as IPay;
  pays: IPay[];
  user = {} as IUser;
  users: IUser[];
  
  constructor(public router: Router, private userService: UserService, private payService: PayService) { }

  ngOnInit() {
    this.userService.getIUser().subscribe((data) => {
      this.users = data;
      this.user = this.users[0];
    });

    this.payService.getPays().subscribe((data) => {
      this.pays = data;
      this.pay = this.pays[0];
    })
  }

  goToHome(){
    this.router.navigateByUrl('/home');
  }
  goToPayToggle(){
    this.router.navigateByUrl('/pay-toggle');
  }
  createFormPay(){
    this.router.navigateByUrl('/pay-information');
  }

  goToInformation(id: string){
    this.router.navigateByUrl(`/pay-information/${id}`);
  }
  
}
