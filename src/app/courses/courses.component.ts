import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [{
    name: 'PUC Science',
    image: '/assets/study.jpg',
    description: 'Physics, Chemistry, Mathematics, Biology, Computer Science'
  },
  {
    name: 'PUC Commerce',
    image: '/assets/study.jpg',
    description: 'Economics, Business Studies, Accountancy, Statistics, History, Computer Science'
  },
  {
    name: 'High School - ICSE',
    image: '/assets/study.jpg',
    description: 'Physics, Chemistry, Mathematics, Biology, Computer Science, Kannada, Hindi'
  },
  {
    name: 'High School - State Board',
    image: '/assets/study.jpg',
    description: 'Mathematics, General Science, Social Studies, Kannada, Hindi'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
