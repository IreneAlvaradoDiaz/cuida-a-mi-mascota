import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Advert } from 'src/app/model/advert';
import { Comment } from 'src/app/model/comment';
import { IUser } from 'src/app/model/iuser';
import { AdvertService } from 'src/app/services/advert.service';
import { CommentsService } from 'src/app/services/comments.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adverts-info',
  templateUrl: './adverts-info.page.html',
  styleUrls: ['./adverts-info.page.scss'],
})
export class AdvertsInfoPage implements OnInit {
  adverts: Advert[];
  users: IUser[];
  advert: Advert = {} as Advert
  comments: Comment[];

  constructor(private router: Router, private commentService: CommentsService, public userService: UserService, public advertService: AdvertService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id != null){
      this.advertService.getAdvert(id).subscribe((data) => {
        this.advert = data;
        console.log(this.advert)
      }, err => console.error(err))
    }

    this.commentService.getComments().subscribe((data) => {
      this.comments = data;
    })

  }


  goToHome() {
    this.router.navigateByUrl('/home');
  }

  goToCreateComment(id:string){
    this.router.navigateByUrl(`/comments/${id}`);
  }
}
