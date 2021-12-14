import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-pay-toggle',
  templateUrl: './pay-toggle.page.html',
  styleUrls: ['./pay-toggle.page.scss'],
})
export class PayTogglePage {
  
  constructor(private router:Router) { }
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }
  
  goToHome(){
    this.router.navigateByUrl('/pagos');
  }
}
