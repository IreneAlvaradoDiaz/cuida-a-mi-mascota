import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
import { IPay } from 'src/app/model/ipay';
import { IUser } from 'src/app/model/iuser';
import { PayService } from 'src/app/services/pay.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pay-toggle',
  templateUrl: './pay-toggle.page.html',
  styleUrls: ['./pay-toggle.page.scss'],
})
export class PayTogglePage implements OnInit{
  
  pay = {} as IPay;
  pays: IPay[];
  user = {} as IUser;
  users: IUser[];
  
  constructor(public router: Router, private userService: UserService, private payService: PayService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.user = this.users[0];
    });

    this.payService.getPays().subscribe((data) => {
      this.pays = data;
      this.pay = this.pays[0];
    })
  }

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }
  
  goToHome(){
    this.router.navigateByUrl('/pays');
  }

}
