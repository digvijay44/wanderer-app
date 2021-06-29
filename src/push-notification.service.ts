import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {
    currentMessage:BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messages.subscribe((messagingContext: any) => {
      messagingContext.onMessage =
        messagingContext.onMessage.bind(messagingContext);
      messagingContext.onTokenRefresh =
        messagingContext.onTokenRefresh.bind(messagingContext);
    });
  }

  requestPermission = () => {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  };

  receiveMessage = () => {
    debugger;
    this.angularFireMessaging.messages.subscribe(
        (payload) => {
            debugger;
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
        },
        (err) => {
            debugger;
          console.error('Unable to get permission to notify.', err);
        })
  };
}
