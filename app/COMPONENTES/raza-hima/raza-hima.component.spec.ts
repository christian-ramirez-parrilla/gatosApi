import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaHimaComponent } from './raza-hima.component';

describe('RazaHimaComponent', () => {
  let component: RazaHimaComponent;
  let fixture: ComponentFixture<RazaHimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaHimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaHimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
