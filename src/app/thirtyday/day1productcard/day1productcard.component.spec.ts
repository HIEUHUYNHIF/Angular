import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1productcardComponent } from './day1productcard.component';

describe('Day1productcardComponent', () => {
  let component: Day1productcardComponent;
  let fixture: ComponentFixture<Day1productcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day1productcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1productcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
