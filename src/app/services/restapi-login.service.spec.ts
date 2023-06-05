import { TestBed } from '@angular/core/testing';

import { RestapiLoginService } from './restapi-login.service';

describe('RestapiLoginService', () => {
  let service: RestapiLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestapiLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
