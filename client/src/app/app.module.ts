import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './root/root.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { IntroductionComponent } from './introduction/introduction.component';


@NgModule({
  declarations: [
    RootComponent,
    PersonalInformationComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
