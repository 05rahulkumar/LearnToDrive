
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-course-manage',
  templateUrl: './course-manage.component.html',
  styleUrls: ['./course-manage.component.css']
})
export class CourseManageComponent {
  @ViewChild('coursForm') courseFormTemplate!: TemplateRef<any>;

  courses = [
    { id: 1, name: 'Beginner Course', duration: '4 weeks', cost: '$200', syllabus: 'Basics of driving', schedule: 'Mon-Fri' },
    { id: 2, name: 'Advanced Course', duration: '6 weeks', cost: '$350', syllabus: 'Advanced driving techniques', schedule: 'Mon-Sat' }
  ];

  displayedColumns: string[] = ['name', 'actions'];
  courseForm!: FormGroup;
  editingCourse: any = null;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.createForm();
  }

  createForm() {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      cost: ['', Validators.required],
      syllabus: ['', Validators.required],
      schedule: ['', Validators.required]
    });
  }

  openCourseForm(course: any = null) {
    this.editingCourse = course;
    if (course) {
      this.courseForm.patchValue(course);
    } else {
      this.courseForm.reset();
    }
    this.dialog.open(this.courseFormTemplate);
  }

  submitCourse() {
    if (this.courseForm.valid) {
      const formValue = this.courseForm.value;
      if (this.editingCourse) {
        // Edit existing course
        Object.assign(this.editingCourse, formValue);
      } else {
        // Add new course
        const newCourse = { id: this.courses.length + 1, ...formValue };
        this.courses.push(newCourse);
      }
      this.dialog.closeAll();
    }
  }

  removeCourse(id: number) {
    this.courses = this.courses.filter(course => course.id !== id);
  }

  editCourse(course: any) {
    this.openCourseForm(course);
  }
}
