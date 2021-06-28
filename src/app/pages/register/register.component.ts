import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  images = ["assets/images/bg-user.jpg","../../assets/images/bg-user-2.jpg","../assets/images/bg-user-3.jpg"];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;
  }
  ngOnInit(): void {
  }

}
