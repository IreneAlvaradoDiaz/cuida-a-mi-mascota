import { Component, Input, OnInit } from '@angular/core';
import { Advert } from 'src/app/model/advert';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

  @Input() comments: Comment[]

  adverts: Advert[];
  constructor() { }

  ngOnInit() {}


}
