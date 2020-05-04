import {Component} from '@angular/core';
import {NamingService} from '../services/naming.service';

@Component({
  selector: 'lib-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {

  appName: string;

  constructor(namingServiceService: NamingService) {
    this.appName = namingServiceService.appName;
  }

}
