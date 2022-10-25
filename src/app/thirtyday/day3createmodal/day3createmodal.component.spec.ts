import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3createmodalComponent } from './day3createmodal.component';

describe('Day3createmodalComponent', () => {
  let component: Day3createmodalComponent;
  let fixture: ComponentFixture<Day3createmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3createmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3createmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
