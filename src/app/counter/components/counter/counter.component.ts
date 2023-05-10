import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h3>
    {{ counter }}
    </h3>

    <button (click)="increasyBy( +1 )">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="discreasyBy( 1 )">-1</button>
  `
})

export class CounterComponent  {

  public counter: number = 10;

  increasyBy(value: number): void {
    this.counter += value;
  }

  discreasyBy(value: number): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}
