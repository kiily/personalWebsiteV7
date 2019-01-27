import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalXPCardComponent } from './professional-xpcard.component';

describe('ProfessionalXPCardComponent', () => {
  let component: ProfessionalXPCardComponent;
  let fixture: ComponentFixture<ProfessionalXPCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalXPCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalXPCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
