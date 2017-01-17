/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddBookService } from './add-book.service';

describe('AddBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddBookService]
    });
  });

  it('should ...', inject([AddBookService], (service: AddBookService) => {
    expect(service).toBeTruthy();
  }));
});
