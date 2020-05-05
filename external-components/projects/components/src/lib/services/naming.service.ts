import {Injectable} from '@angular/core';

@Injectable()
export class NamingService implements ExternalNamingService {

  constructor(private _delegate: ExternalNamingService) {
  }

  get appName(): string {
    return this._delegate.appName;
  }
}

// interfaces are not valid tokens for DI
export interface ExternalNamingService {
  appName: string;
}

