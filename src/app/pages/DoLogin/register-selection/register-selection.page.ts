import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { IUser } from 'src/app/model/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-selection',
  templateUrl: './register-selection.page.html',
  styleUrls: ['./register-selection.page.scss'],
})
export class RegisterSelectionPage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }
  
  
  ngOnInit() {
  }

  user: IUser = {} as IUser;
  users = [];

  register(type: string){
    this.user.type = type;
    this.router.navigateByUrl(`/register/${this.user.type}`);
  }

  goBack() {
    this.router.navigateByUrl('/login');
  }
}
