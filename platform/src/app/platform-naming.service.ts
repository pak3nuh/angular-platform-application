import {ExternalNamingService} from 'external-components';

export class PlatformNamingService implements ExternalNamingService {

  appName: string;

  constructor(prefix: string) {
    this.appName = prefix + ', instance ' + PlatformNamingService.instanceNumber++;
  }

  static instanceNumber = 1;
}
