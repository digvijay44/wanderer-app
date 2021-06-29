import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PushNotificationService } from 'src/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'wanderer-app';
  message:BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private messagingService: PushNotificationService){

  }
  ngOnInit(){
    this.messagingService.requestPermission();
  this.messagingService.receiveMessage();
  this.message = this.messagingService.currentMessage;
  }
}
