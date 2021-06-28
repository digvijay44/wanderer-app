import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  images = ["assets/images/bg-user.jpg","../../assets/images/bg-user-2.jpg","../assets/images/bg-user-3.jpg"];
  
  constructor(config: NgbCarouselConfig, private router: Router) {
    config.interval = 3000;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;
  }
  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl('/user');
  }
}
