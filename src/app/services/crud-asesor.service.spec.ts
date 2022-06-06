import { TestBed } from '@angular/core/testing';

import { CrudAsesorService } from './crud-asesor.service';

describe('CrudAsesorService', () => {
  let service: CrudAsesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudAsesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
