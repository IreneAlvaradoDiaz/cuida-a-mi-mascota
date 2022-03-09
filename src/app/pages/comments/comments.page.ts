import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { arrayRemove } from 'firebase/firestore';
import { Advert } from 'src/app/model/advert';
import { Comment } from 'src/app/model/comment';
import { IUser } from 'src/app/model/iuser';
import { AdvertService } from 'src/app/services/advert.service';
import { CommentsService } from 'src/app/services/comments.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  @ViewChild('rating') rating : any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private commentService: CommentsService, private advertService: AdvertService) { }

  user: IUser = {} as IUser;
  comment: Comment = {} as Comment;
  advert: Advert = {} as Advert;

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id != null){
      this.userService.getIUser().subscribe((data) => {
        this.user = data[0];
      });

      this.advertService.getAdvert(id).then((data) => {
        this.advert = data;
      }, err => console.error(err))
    }
  }

  goToHome() {
    this.router.navigateByUrl(`/adverts-info/${this.advert.id}`);
  }

  addComment(){
    if( !this.comment.rate ) this.comment.rate = 0;
    if( !Array.isArray(this.advert.rate) ) this.advert.rate = [];
    this.advert.rate.push(this.comment.rate);
    this.comment.idUser = this.user.userId;
    this.comment.idAdvert = this.advert.id;
    this.comment.propiety = this.user;
    this.advert.rateAvg = Math.floor(this.advert.rate.reduce((partialSum, a) => partialSum + a, 0) / this.advert.rate.length);
    this.commentService.addComment(this.comment);
    this.advertService.updateAdverts(this.advert);
    this.router.navigateByUrl(`/adverts-info/${this.advert.id}`)
  }

  onRatingChange(rating){
    console.log('The evaluation was modified and now its value is: ',rating);
    // do your stuff
  } 
}
