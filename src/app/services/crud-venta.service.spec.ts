import { TestBed } from '@angular/core/testing';

import { CrudVentaService } from './crud-venta.service';

describe('CrudVentaService', () => {
  let service: CrudVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
