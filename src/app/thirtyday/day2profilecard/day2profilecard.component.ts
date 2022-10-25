import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-day2profilecard',
  templateUrl: './day2profilecard.component.html',
  styleUrls: ['./day2profilecard.component.scss']
})
export class Day2profilecardComponent implements OnInit {
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faTiktok = faTiktok;
  faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {src: 'assets/images/day2/1.jpeg', name: 'Trung Hieu', info: 'Anh ba', link: 'fb1'},
    {src: 'assets/images/day2/2.jpg', name: 'Trong Nghia', info: 'Anh tu', link: 'fb2'},
    {src: 'assets/images/day2/3.jpg', name: 'Thanh Thao', info: 'Chi hai', link: 'fb3'}
  ];
}
