import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2profilecardComponent } from './day2profilecard.component';

describe('Day2profilecardComponent', () => {
  let component: Day2profilecardComponent;
  let fixture: ComponentFixture<Day2profilecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2profilecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2profilecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
