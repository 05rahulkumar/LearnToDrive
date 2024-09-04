import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-blog-news',
  templateUrl: './blog-news.component.html',
  styleUrls: ['./blog-news.component.css']
})
export class BlogNewsComponent {
  videos = [
    {
      title: 'How to Handle Driving Emergencies',
      url: 'assets/videos/driving-emergencies.mp4',
    },
    {
      title: 'Understanding Road Signs',
      url: 'assets/videos/road-signs.mp4',
    },
    {
      title: 'Parking Tips for New Drivers',
      url: 'assets/videos/parking-tips.mp4',
    },
    {
      title: 'Defensive Driving Techniques',
      url: 'assets/videos/defensive-driving.mp4',
    },
  ];

  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video: HTMLVideoElement = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, options);

    this.videoPlayers.forEach((videoElement) => {
      observer.observe(videoElement.nativeElement);
    });
  }

}
