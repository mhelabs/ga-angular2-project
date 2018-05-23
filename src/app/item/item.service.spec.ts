/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemService } from './item.service';
import { BalanceService } from '../balance/balance.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemService, BalanceService, Http, Response, Headers, RequestOptions]
    });
  });

  xit('should ...', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));
});
