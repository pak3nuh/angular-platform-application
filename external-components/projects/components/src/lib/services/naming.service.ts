import {Injectable} from '@angular/core';

// todo confirm injection through platform
@Injectable({
  providedIn: 'root'
})
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

