import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fab-Institue';
  services = [{
    name: 'Our Service',
    image: '/assets/study.jpg',
    description: 'We provide ICSE tutoring services for Class Room Coaching and  Online Classes  only for 10TH STD  ICSE students.'
  },
  {
    name: 'Admissions Open-2022-2023',
    image: '/assets/study.jpg',
    description: 'Admission Open for 2022 - 2023  Batch. We do have Morning and Evening batches. We do have both Online and Offline classes. Hurry up ! Limited Seats Available !'
  },
  {
    name: 'Testimonials',
    image: '/assets/study.jpg',
    description: 'The best ICSE coaching institution with best teachers! Inspiration and motivation is what I got from this place'
  },
  {
    name: '2019-20 Merit Students',
    image: '/assets/study.jpg',
    description: 'Anvitha, Rithanya, Kushi, Radhika, and Shruthi Radhakrishnan - recepients of NIYA Merit Awards - 2019'
  },
  {
    name: 'National Award Winner - 2019',
    image: '/assets/study.jpg',
    description: 'NIYA has been confered with National Excellence - SCALE Award -2019 for Training & Skill Development by the industry body CII in December 2019.'
  },
  {
    name: 'ICSE Syllabus FAQs',
    image: '/assets/study.jpg',
    description: 'The Indian Certificate of Secondary Education (ICSE) is an examination conducted by the Council for the Indian School Certificate Examination.'
  }]
}
