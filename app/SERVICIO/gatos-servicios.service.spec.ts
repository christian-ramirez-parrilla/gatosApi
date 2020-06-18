import { TestBed } from '@angular/core/testing';

import { GatosServiciosService } from './gatos-servicios.service';

describe('GatosServiciosService', () => {
  let service: GatosServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatosServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
