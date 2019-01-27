import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCardComponent } from './it-card.component';

describe('ItSlideComponent', () => {
  let component: ItCardComponent;
  let fixture: ComponentFixture<ItCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
