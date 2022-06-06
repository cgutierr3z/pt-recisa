import { TestBed } from '@angular/core/testing';

import { CrudEstacionService } from './crud-estacion.service';

describe('CrudEstacionService', () => {
  let service: CrudEstacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudEstacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
