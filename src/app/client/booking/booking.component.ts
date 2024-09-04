import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  registrationForm: FormGroup;
  courses = [
    { title: 'Beginner Driving Course' },
    { title: 'Advanced Driving Techniques' },
    { title: 'Refresher Driving Course' }
  ];
  schedules = ['Morning', 'Afternoon', 'Evening'];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      course: ['', Validators.required],
      schedule: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      // Implement your payment and registration logic here
      console.log('Registration Form Data:', formData);
      alert('Registration successful!');
    }
  }
}
