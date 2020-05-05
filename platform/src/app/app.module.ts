import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent, ComponentProvidedService, PlatformProvidedService} from './app.component';
import {ComponentsModule, NamingService} from 'external-components';
import {PlatformNamingService} from './platform-naming.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentProvidedService,
    PlatformProvidedService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [
    { provide: NamingService, useValue: new NamingService(new PlatformNamingService("Module")) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
