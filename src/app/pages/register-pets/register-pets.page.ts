import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/iuser';
import { Pet } from 'src/app/model/pet';
import { PetService } from 'src/app/services/pet.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-register-pets',
  templateUrl: './register-pets.page.html',
  styleUrls: ['./register-pets.page.scss'],
})
export class RegisterPetsPage implements OnInit {

  pet: Pet = {enfermedad: false, vacunas: false, chip: false} as Pet;
  pets = [];
  user: IUser = {} as IUser;
  users: IUser[];

  constructor(private petService: PetService, private userService: UserService, private router: Router, private photoService: PhotoService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
      this.user = this.users[0];
    });
  }

  
  goToHome(){
    this.router.navigateByUrl('/account');
  }

  goToBack(){
    this.pet.idUser = this.users[0].userId;
    this.petService.addPet(this.pet);
    this.router.navigateByUrl('/profile-pets')
  }

  async openCamera() {
    const foto = await this.photoService.takePicture();    
    this.pets.push('data:image/jpeg;base64,' + foto);
    this.pet.photo = this.pets[0];
  }
    

}
