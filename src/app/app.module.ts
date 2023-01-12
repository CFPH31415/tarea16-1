import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { EmailValidatorDirective } from './pages/login/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
