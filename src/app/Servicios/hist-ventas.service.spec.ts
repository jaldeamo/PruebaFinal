import { TestBed } from '@angular/core/testing';

import { HistVentasService } from './hist-ventas.service';

describe('HistVentasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistVentasService = TestBed.get(HistVentasService);
    expect(service).toBeTruthy();
  });
});
