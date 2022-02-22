import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  users: IUser[];
  user: IUser = {} as IUser;
  comment: Comment = {} as Comment;
  adverts: Advert[]
  advert: Advert = {} as Advert

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.user = this.users[0];
    });

    const id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  goToHome() {
    this.router.navigateByUrl('/adverts-info');
  }

  addComment(){
    this.advert.comment = this.comment;
    this.advert.rate = this.comment.rate;
    this.comment.propiety = this.users[0];
    this.commentService.addComment(this.comment);
    this.router.navigateByUrl('/adverts-info')
  }

  onRatingChange(rating){
    console.log('The evaluation was modified and now its value is: ',rating);
    // do your stuff
  } 
}
