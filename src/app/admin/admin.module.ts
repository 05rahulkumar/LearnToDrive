import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../shared/material/material.module';
import { CourseManageComponent } from './course-manage/course-manage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingManageComponent } from './booking-manage/booking-manage.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { SettingComponent } from './setting/setting.component';
import { HighlightBenefitsComponent } from './highlight-benefits/highlight-benefits.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CourseManageComponent,
    BookingManageComponent,
    UserManageComponent,
    SettingComponent,
    HighlightBenefitsComponent,
    TrainerComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    
  ]
})
export class AdminModule { }
