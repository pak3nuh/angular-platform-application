import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsModule, ExternalNamingService, NamingService} from "external-components";

class MyNamingService implements ExternalNamingService {
    appName = 'My platform app'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [
    { provide: NamingService, useValue: new NamingService(new MyNamingService()) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
