import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TooltipDirective, Overlay } from './tooltip.directive';
import { PanelComponent, FancyButton } from './component/panel/panel.component';
import { Tabs, Tab } from './component/tabs/tabs.component';
import { Tabs2Component, TabContent, TabTitle } from './component/tabs2/tabs2.component';
import { View1Component } from './views/view1/view1.component';
import { View2Component } from './views/view2/view2.component';
import { ForbiddenValidatorDirective } from './directive/forbidden-validator.directive';
import { EmailValidator } from './directive/email-validator.directive';


@NgModule({
  declarations: [
    AppComponent, TooltipDirective, PanelComponent, FancyButton, Tabs, Tab , 
    Tabs2Component, TabContent, TabTitle, View1Component, View2Component,  ForbiddenValidatorDirective, EmailValidator
  ],
  imports: [
    BrowserModule,FormsModule, 
    RouterModule.forRoot([
      {path: '', redirectTo: 'view1', pathMatch: 'full'},
      {path: 'view1', component : View1Component},
      {path: 'view2', component : View2Component},
      {path: '**', redirectTo: ''}
  ])
  ],
  providers: [Overlay],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
