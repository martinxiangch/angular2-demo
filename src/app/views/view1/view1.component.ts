import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view1',
  styles: [
    `input.ng-touched.ng-invalid,
     select.ng-touched.ng-invalid {
      border: 2px solid red;
    }`],
  templateUrl: './view1.component.html'
})
export class View1Component implements OnInit {

  constructor() { }
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

  ngOnInit() {
  }

}
