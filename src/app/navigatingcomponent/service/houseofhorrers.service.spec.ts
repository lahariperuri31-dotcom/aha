import { TestBed } from '@angular/core/testing';

import { HouseofhorrersService } from './houseofhorrers.service';

describe('HouseofhorrersService', () => {
  let service: HouseofhorrersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseofhorrersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
