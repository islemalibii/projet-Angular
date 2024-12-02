import { TestBed } from '@angular/core/testing';

import { AnasService } from './anas.service';

describe('AnasService', () => {
  let service: AnasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
