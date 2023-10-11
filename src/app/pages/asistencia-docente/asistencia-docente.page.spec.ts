import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaDocentePage } from './asistencia-docente.page';

describe('AsistenciaDocentePage', () => {
  let component: AsistenciaDocentePage;
  let fixture: ComponentFixture<AsistenciaDocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsistenciaDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
