import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaEgiptComponent } from './raza-egipt.component';

describe('RazaEgiptComponent', () => {
  let component: RazaEgiptComponent;
  let fixture: ComponentFixture<RazaEgiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaEgiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaEgiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
