import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Testimonial {
  id: number;
  name: string;
  review: string;
}
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  testimonials: Testimonial[] = [];
  dataSource = new MatTableDataSource<Testimonial>(this.testimonials);
  testimonialForm!: FormGroup;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.testimonialForm = this.fb.group({
      name: ['', Validators.required],
      review: ['', Validators.required]
    });
  }

  addOrUpdateTestimonial() {
    if (this.testimonialForm.valid) {
      const testimonial: Testimonial = this.testimonialForm.value;
      if (this.editingIndex !== null) {
        // Update existing testimonial
        this.testimonials[this.editingIndex] = { ...testimonial, id: this.testimonials[this.editingIndex].id };
        this.snackBar.open('Testimonial updated successfully', 'Close', { duration: 2000 });
      } else {
        // Add new testimonial
        testimonial.id = this.testimonials.length + 1;
        this.testimonials.push(testimonial);
        this.snackBar.open('Testimonial added successfully', 'Close', { duration: 2000 });
      }
      this.dataSource.data = this.testimonials;
      this.resetForm();
    }
  }

  editTestimonial(index: number) {
    this.editingIndex = index;
    const testimonial = this.testimonials[index];
    this.testimonialForm.setValue({ name: testimonial.name, review: testimonial.review });
  }

  deleteTestimonial(index: number) {
    this.testimonials.splice(index, 1);
    this.dataSource.data = this.testimonials;
    this.snackBar.open('Testimonial deleted successfully', 'Close', { duration: 2000 });
  }

  resetForm() {
    this.testimonialForm.reset();
    this.editingIndex = null;
  }
}
