import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregaruPage } from './agregaru.page';

describe('AgregaruPage', () => {
  let component: AgregaruPage;
  let fixture: ComponentFixture<AgregaruPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregaruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
