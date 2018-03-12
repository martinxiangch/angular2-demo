import {HostListener, Input, Injectable, ElementRef, Inject, Directive, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tabparam = '';
  tabparam2 = '';
  tabChanged(tab){
   this.tabparam = tab.title;
   console.log(tab);
  }

  tabChanged2(tab){
    this.tabparam2 = tab.title;
    console.log(tab);
   }

}
