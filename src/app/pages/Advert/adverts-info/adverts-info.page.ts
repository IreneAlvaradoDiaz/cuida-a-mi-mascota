import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Advert } from 'src/app/model/advert';
import { Comment } from 'src/app/model/comment';
import { IUser } from 'src/app/model/iuser';
import { AdvertService } from 'src/app/services/advert.service';
import { CommentsService } from 'src/app/services/comments.service';
import { UserService } from 'src/app/services/user.service';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-adverts-info',
  templateUrl: './adverts-info.page.html',
  styleUrls: ['./adverts-info.page.scss'],
})

export class AdvertsInfoPage implements OnInit {
  adverts: Advert[];
  advert: Advert = {} as Advert
  comments: Comment[];
  telephoneUser: string = "";
  constructor(private router: Router, private callNumber: CallNumber, private alertController: AlertController, private commentService: CommentsService, public advertService: AdvertService, private activatedRoute: ActivatedRoute) { }

  contact: boolean = false;
  telephone: string = "";

  ngOnInit() {    
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  
    if(id != null){
      console.log(id)
      this.advertService.getAdvert(id).then((data) => {
        console.log(data)
        if( data ){
          this.advert = data;
          this.telephoneUser = this.advert.nameUser.telefono;
        } else this.goToHome();
      }, err => console.error(err));

      this.commentService.getComments(id).then(data => {
        this.comments = data;
      });
    }
    
  }  

  openContact(){
    this.contact = true;
  }

  closeContact(){
    this.contact = false;
  }

  call(telephone: string){//con este método se podrá llamar al usuario que ha publicado el anuncio
    this.callNumber.callNumber(telephone, true);
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  goToCreateComment(id:string){
    this.router.navigateByUrl(`/comments/${id}`);
  }
}
