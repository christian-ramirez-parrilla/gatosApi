import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaDragonComponent } from './raza-dragon.component';

describe('RazaDragonComponent', () => {
  let component: RazaDragonComponent;
  let fixture: ComponentFixture<RazaDragonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaDragonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
