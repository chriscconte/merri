import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Generator } from './app.component.generator';
import { RedirectTo } from './app.component.redirectTo';
import { AdminConsole } from './app.component.adminConsole';
import { NotFound } from './app.component.notFound';

@NgModule({
  declarations: [
    AppComponent,
    Generator,
    RedirectTo,
    AdminConsole,
    NotFound
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
