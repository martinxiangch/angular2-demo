import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view2',
  template: `
    <p>
      view2 works!
    </p>
   
    <div>
      <input id="emailInput1" class="form-control" type="text" name="emailInput2" #emailInput3=ngModel [(ngModel)]="email" email-input required>
      <div *ngIf="emailInput3.invalid && (emailInput3.dirty || emailInput3.touched)">
        <p>Input the right email.</p>
      </div>
    </div>
   
  `,
  styles: [
    `input.ng-touched.ng-invalid,
     select.ng-touched.ng-invalid {
      border: 2px solid red;
    }`
  ]
})
export class View2Component implements OnInit {

  constructor() { }
  email ='';
  ngOnInit() {
  }

}
