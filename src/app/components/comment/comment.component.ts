import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
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
