import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DesignSystemModule} from '@test/design-system/design-system.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DesignSystemModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
