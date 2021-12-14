import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/model/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  user: IUser = {id: null, photo: '', nombre: '', apellidos: '', sexo: '', edad: null, telefono: null, email: '', password: null}

  constructor(private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id != null){
      this.userService.getUsers(+id).subscribe(
        data => this.user = data
      )
    }
  }

  goToBack(){
    this.userService.saveUser(this.user);
    this.router.navigateByUrl('/login');
  }
  goBack(){
    this.router.navigateByUrl('/login');
  }
}
