import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayIndexingComponent } from './array-indexing.component';

describe('ArrayIndexingComponent', () => {
  let component: ArrayIndexingComponent;
  let fixture: ComponentFixture<ArrayIndexingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayIndexingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayIndexingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
