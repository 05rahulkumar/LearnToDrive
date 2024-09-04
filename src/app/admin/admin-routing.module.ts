import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseManageComponent } from './course-manage/course-manage.component';
import { BookingManageComponent } from './booking-manage/booking-manage.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { SettingComponent } from './setting/setting.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TrainerComponent } from './trainer/trainer.component';
import { HighlightBenefitsComponent } from './highlight-benefits/highlight-benefits.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'courses-manage',component:CourseManageComponent},
  {path:'booking-manage',component:BookingManageComponent},
  {path:'user-manage',component:UserManageComponent},
  {path:'setting',component:SettingComponent},
  {path:'testimonial',component:TestimonialComponent},
  {path:'benefits',component:HighlightBenefitsComponent},
  {path:'trainer',component:TrainerComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
