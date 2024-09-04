import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { MaterialModule } from '../shared/material/material.module';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LearningComponent } from './learning/learning.component';
import { BlogNewsComponent } from './blog-news/blog-news.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailsComponent,
    BookingComponent,
    LearningComponent,
    BlogNewsComponent,
    UserAccountComponent,
    ContactUsComponent,

  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
