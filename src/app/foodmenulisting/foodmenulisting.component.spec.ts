import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodmenulistingComponent } from './foodmenulisting.component';

describe('FoodmenulistingComponent', () => {
  let component: FoodmenulistingComponent;
  let fixture: ComponentFixture<FoodmenulistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodmenulistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodmenulistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
