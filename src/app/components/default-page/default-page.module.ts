import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultPageComponent } from './default-page.component';
import { HeaderModule } from '../header/header.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    DefaultPageComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    HeaderModule,
  ],
  exports: [
    DefaultPageComponent
  ]
})
export class DefaultPageModule { }
