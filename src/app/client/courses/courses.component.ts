import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  constructor(private router:Router){}
  courses = [
    {
      title: 'Beginner Driving Course',
      duration: '4 weeks',
      cost: '$200',
      syllabus: 'Basic driving skills, traffic rules, and road safety.',
    },
    {
      title: 'Advanced Driving Techniques',
      duration: '6 weeks',
      cost: '$300',
      syllabus: 'Advanced driving techniques, handling difficult conditions, and defensive driving.',
    },
    {
      title: 'Refresher Driving Course',
      duration: '2 weeks',
      cost: '$150',
      syllabus: 'Refresher on driving skills and road rules, suitable for experienced drivers.',
    }
  ];

  enroll(course: any) {
    // Implement enrollment logic here
    alert(`You have chosen to enroll in the ${course.title}`);
  }

  viewDetails(course: any) {
    // Implement view details logic here
    this.router.navigate(['/courses-details/1'])
    alert(`Viewing details for ${course.title}`);
  }
}
