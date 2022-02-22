import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsPostComponent } from './adverts-post/adverts-post.component';
import { IonicModule } from '@ionic/angular';
import { RateComponent } from './rate/rate.component';
import { CommentComponent } from './comment/comment.component';
 
@NgModule({
 declarations: [AdvertsPostComponent, RateComponent, CommentComponent],
 imports: [
   CommonModule, IonicModule
 ],
 exports: [AdvertsPostComponent, RateComponent, CommentComponent]
})
export class ComponentsModule { }