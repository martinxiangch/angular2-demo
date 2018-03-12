import { Component } from '@angular/core';

@Component({
  selector: 'fancy-button',
  template: '<button><ng-content></ng-content></button>'
})
export class FancyButton { /* Extra behavior */ }

@Component({
  selector: 'panel',
  styles: [
    `.panel {
      width: auto;
      display: inline-block;
      border: 1px solid black;
    }
    .panel-title {
      border-bottom: 1px solid black;
      background-color: #eee;
    }
    .panel-content,
    .panel-title {
      padding: 5px;
    }`
  ],
  template: `
    <div class="panel">
      <div class="panel-title">
        <ng-content select="panel-title"></ng-content>
      </div>
      <div class="panel-content">
        <ng-content select="panel-content"></ng-content>
      </div>
    </div>`
})
export class PanelComponent { }
