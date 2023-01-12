import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PagesModule } from '../pages/pages.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class ComponentsModule { }
