import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('reviewModal') reviewModal!: TemplateRef<any>;
  trainers = [
    {
      id: 1,
      name: 'John Doe',
      specialization: 'Advanced Driving Instructor',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      reviews: [
        { username: 'Alice', comment: 'Great instructor!' },
        { username: 'Bob', comment: 'Very professional and helpful.' }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      specialization: 'Beginner Driving Instructor',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      reviews: [
        { username: 'Charlie', comment: 'Fantastic teaching skills!' }
      ]
    }
  ];

  selectedTrainer:any = { name: '', reviews: [] };
  newReview = { comment: '' };

  constructor(public dialog: MatDialog) {}

  openReviews(trainer: any): void {
    this.selectedTrainer = trainer;
    this.dialog.open(this.reviewModal);
  }

  submitReview(): void {
    if (this.newReview.comment.trim()) {
      this.selectedTrainer.reviews.push({ username: 'Anonymous', comment: this.newReview.comment });
      this.newReview.comment = ''; // Clear the textarea
    }
  }
  images = [
    { src: 'assets/img/template1.webp', alt: 'Image 3' },
    { src: 'assets/img/dl_banner1.webp', alt: 'Image 1' },
    { src: 'assets/img/dl_banner2.jpg', alt: 'Image 2' },
    { src: 'assets/img/dl_banner3.jpg', alt: 'Image 3' },
    { src: 'assets/img/l_banner4.jpg', alt: 'Image 3' },
  ];

  courses = [
    {
      title: 'Basic Driving Course',
      description: 'Learn the fundamentals of driving and get your license with confidence.',
      image: 'assets/img/ds1.webp'
    },
    {
      title: 'Advanced Driving Techniques',
      description: 'Enhance your driving skills with advanced techniques and strategies.',
      image: 'assets/img/dl2.webp'
    },
    {
      title: 'Defensive Driving Course',
      description: 'Prepare for unexpected situations with our defensive driving course.',
      image: 'assets/img/dl3.webp'
    },
    
  ];

  benefits = [
    {
      title: 'Experienced Instructors',
      description: 'Our instructors have years of experience and are committed to helping you become a confident driver.',
      icon: 'thumb_up'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Choose from a variety of time slots that fit your busy schedule, including evenings and weekends.',
      icon: 'schedule'
    },
    {
      title: 'Affordable Pricing',
      description: 'Get high-quality driving instruction at competitive prices, with options for packages and discounts.',
      icon: 'attach_money'
    }
  ];

  // dashboard
 

  // Sample upcoming appointments data
  appointments = [
    { date: new Date(), time: '10:00 AM', student: 'Alice Johnson' },
    { date: new Date(), time: '02:00 PM', student: 'Bob Smith' }
  ];

  displayedColumns: string[] = ['date', 'time', 'student'];

  // Sample progress tracking data
  progressTracking = [
    { student: 'Alice Johnson', percentage: 80 },
    { student: 'Bob Smith', percentage: 60 },
    { student: 'Charlie Brown', percentage: 90 }
  ];
 
  
}
