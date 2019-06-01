import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ShellComponent } from './ui/shell/shell.component';
import { HeaderComponent } from './ui/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [ShellComponent, HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    PagesModule
  ],
  exports: [ShellComponent, HeaderComponent, RouterModule],
})
export class CoreModule { }
