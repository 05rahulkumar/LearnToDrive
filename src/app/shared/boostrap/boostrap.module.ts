import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbCarouselModule
  ],exports:[
    CommonModule,
    NgbCarouselModule,

  ]
})
export class BoostrapModule { }
