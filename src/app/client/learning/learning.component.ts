import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent {
  studyMaterials = [
    { title: 'Driving Guide PDF', link: 'https://example.com/guide.pdf' },
    { title: 'Practice Test 1', link: 'https://example.com/test1.pdf' },
    { title: 'Practice Test 2', link: 'https://example.com/test2.pdf' }
  ];

  videoTutorials = [
    { title: 'How to Drive Safely', url: 'https://www.youtube.com/embed/example1' },
    { title: 'Advanced Driving Techniques', url: 'https://www.youtube.com/embed/example2' }
  ];

  faqs = [
    { question: 'What is the duration of the courses?', answer: 'Courses vary from 2 weeks to 6 weeks.' },
    { question: 'What materials are included in the course?', answer: 'The course includes study guides, practice tests, and video tutorials.' }
  ];

  tips = [
    'Always follow traffic rules and regulations.',
    'Practice driving in different conditions.',
    'Stay calm and focused while driving.'
  ];
}
