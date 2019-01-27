import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalXPComponent } from './professional-xp.component';

describe('ProfessionalXPComponent', () => {
  let component: ProfessionalXPComponent;
  let fixture: ComponentFixture<ProfessionalXPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalXPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalXPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
