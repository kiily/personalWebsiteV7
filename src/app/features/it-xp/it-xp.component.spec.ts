import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItXPComponent } from './it-xp.component';

describe('ItXPComponent', () => {
  let component: ItXPComponent;
  let fixture: ComponentFixture<ItXPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItXPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItXPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
