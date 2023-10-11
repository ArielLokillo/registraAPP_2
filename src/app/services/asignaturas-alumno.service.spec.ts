import { TestBed } from '@angular/core/testing';

import { AsignaturasAlumnoService } from './asignaturas-alumno.service';

describe('AsignaturasAlumnoService', () => {
  let service: AsignaturasAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignaturasAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
