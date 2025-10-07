import { TestBed } from '@angular/core/testing';

import { NewData } from './new-data';

describe('NewData', () => {
  let service: NewData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
