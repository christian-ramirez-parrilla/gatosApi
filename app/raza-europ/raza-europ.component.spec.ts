import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaEuropComponent } from './raza-europ.component';

describe('RazaEuropComponent', () => {
  let component: RazaEuropComponent;
  let fixture: ComponentFixture<RazaEuropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaEuropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaEuropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
