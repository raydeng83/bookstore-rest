/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetBookListService } from './get-book-list.service';

describe('GetBookListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBookListService]
    });
  });

  it('should ...', inject([GetBookListService], (service: GetBookListService) => {
    expect(service).toBeTruthy();
  }));
});
