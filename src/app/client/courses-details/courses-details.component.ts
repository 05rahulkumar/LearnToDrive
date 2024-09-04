import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent {
  course: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Simulating fetching course details based on route parameter
    const courseId = this.route.snapshot.paramMap.get('id');
    this.getCourseDetails(courseId);
  }

  getCourseDetails(id: string | null) {
    // Fetch course details from a service or static data based on ID
    // For demonstration, using static data
    this.course = {
      title: 'Advanced Driving Techniques',
      duration: '6 weeks',
      cost: '$300',
      syllabus: 'Advanced driving techniques, handling difficult conditions, and defensive driving.',
      description: 'This course covers advanced techniques to improve your driving skills and ensure safety in challenging conditions.'
    };
  }

  enroll() {
    // Implement enrollment logic here
    alert(`You have chosen to enroll in the ${this.course.title}`);
  }
}
