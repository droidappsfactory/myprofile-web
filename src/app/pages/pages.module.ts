import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyIntroComponent } from './my-intro/my-intro.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [MyIntroComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyIntroComponent, HomeComponent
  ]
})
export class PagesModule { }
