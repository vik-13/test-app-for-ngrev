import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard';
import { BlaDirective } from './components/bla/bla.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlaDirective
  ],
  imports: [
    BrowserModule,

    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
