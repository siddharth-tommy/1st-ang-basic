import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SiddhuComponent } from './siddhu/siddhu.component';
import { SiddhuChildComponent } from './siddhu/siddhu-child/siddhu-child.component';
import { TestModule } from './test/test.module';
import { Test1Component } from './test/test1/test1.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    SiddhuComponent,
    SiddhuChildComponent,
    Test1Component,
    MapComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    TestModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
