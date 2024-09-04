import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      // Handle form submission, e.g., send data to a server
    }
  }
  stars(rating: number): number[] {
    return Array(rating).fill(0);
  }
  reviews = [
    { name: 'John Doe', date: new Date(), message: 'Great service!', rating: 5 },
    { name: 'Jane Smith', date: new Date(), message: 'Very helpful.', rating: 4 }
  ];
    
}
