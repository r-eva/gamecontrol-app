import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('numberFromGame') curentNumber = new EventEmitter<number>();  // currentNumber = number
  funcSetInterval;
  startNumber = 1
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.funcSetInterval = setInterval(() => {
      this.curentNumber.emit(this.startNumber++);
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.funcSetInterval)
  }

}
