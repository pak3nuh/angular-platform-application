import {Component} from '@angular/core';
import {NamingService} from 'external-components';
import {PlatformNamingService} from './platform-naming.service';

@Component({
  selector: 'app-root',
  template: `
    <platform-provided-service></platform-provided-service>
    <component-provided-service></component-provided-service>
  `,
  styleUrls: ['./app.component.sass'],

})
export class AppComponent {
  title = 'platform';
}

@Component({
  selector: 'component-provided-service',
  template: `
    <lib-hello-world></lib-hello-world>
  `,
  styles:[],
  providers: [
    { provide: NamingService, useValue: new NamingService(new PlatformNamingService("Component")) }
  ]
})
export class ComponentProvidedService {

}

@Component({
  selector: 'platform-provided-service',
  template: `
    <lib-hello-world></lib-hello-world>
  `,
  styles:[]
})
export class PlatformProvidedService {

}
