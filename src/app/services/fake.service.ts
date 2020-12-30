import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(
    private loggerService: LoggerService
  ) { }

  test() {
    this.loggerService.logger('test');
  }
}
