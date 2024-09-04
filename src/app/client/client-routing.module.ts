import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { BookingComponent } from './booking/booking.component';
import { LearningComponent } from './learning/learning.component';
import { BlogNewsComponent } from './blog-news/blog-news.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'courses-details/:id', component: CoursesDetailsComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'blog-news', component: BlogNewsComponent },
  { path: 'account', component: UserAccountComponent },
  { path: 'contact-us', component: ContactUsComponent }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
