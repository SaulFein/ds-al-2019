import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulatorVariablesComponent } from './accumulator-variables.component';

describe('AccumulatorVariablesComponent', () => {
  let component: AccumulatorVariablesComponent;
  let fixture: ComponentFixture<AccumulatorVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccumulatorVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccumulatorVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
