import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }        from './app.component';
import { CompanyDetailComponent } from './companies-search/company-detail.component'; // <-- #1 import component

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailComponent, // <-- #3 declare app component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule // <-- #2 add to @NgModule imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
