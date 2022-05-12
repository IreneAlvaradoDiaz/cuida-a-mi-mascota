import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IUser } from 'src/app/model/iuser';
import { Pet } from 'src/app/model/pet';
import { PetService } from 'src/app/services/pet.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-pets',
  templateUrl: './profile-pets.page.html',
  styleUrls: ['./profile-pets.page.scss'],
})
export class ProfilePetsPage implements OnInit {

  constructor(public router: Router, private photoService: PhotoService, public petService: PetService, private userService: UserService, private alertController: AlertController ) { }

  user: IUser = {} as IUser;
  users: IUser[];
  pet: Pet = {} as Pet
  pets: Pet[];

  ngOnInit() {
    this.userService.getIUser().subscribe((data) => {
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
    this.petService.updatePet(this.pet)
  }

  async openCamera() {
    const doPhoto = await this.photoService.takePicture();    
    const uploadPhoto = await this.photoService.uploadFile(doPhoto, `Pets/${this.pet.nombre} - ${this.user.nombre} ${this.user.apellidos}`);
    this.pet.photo = uploadPhoto;
  }

  edad(): number{
    const today: Date = new Date();
    const birthDate: Date = new Date(Date.parse(this.pet.fechaNacimiento));
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }
}
