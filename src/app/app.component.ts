import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gamecontrol-app';
  currentShowedNumber = []
  
  onNumberReceived(receivedNumber: number) {
    this.currentShowedNumber.push(receivedNumber)
  }

}
