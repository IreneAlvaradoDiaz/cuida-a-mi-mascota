import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IUser } from 'src/app/model/iuser';
import { Pet } from 'src/app/model/pet';
import { PetService } from 'src/app/services/pet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-pets',
  templateUrl: './profile-pets.page.html',
  styleUrls: ['./profile-pets.page.scss'],
})
export class ProfilePetsPage implements OnInit {

  constructor(public router: Router, public petService: PetService, private userService: UserService, private alertController: AlertController ) { }

  user: IUser = {} as IUser;
  users: IUser[];
  pet: Pet = {} as Pet
  pets: Pet[];

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
      this.user = this.users[0];
    });

    this.petService.getPets().subscribe((data) => {
      this.pets = data;
      this.pet = this.pets[0];
    })
    this.pet.edit = false;
  }

  goToHome(){
    this.router.navigateByUrl('/home');
  }
  getPets(){
    this.petService.getPets();
  }
  
  edit(){
    this.pet.edit = true;
  }

  save(){
    this.pet.edit = false;
    this.userService.updatePet(this.pet)
    
  }
}
