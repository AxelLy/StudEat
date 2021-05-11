import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosRestaurantComponent } from './infos-restaurant.component';

describe('InfosRestaurantComponent', () => {
  let component: InfosRestaurantComponent;
  let fixture: ComponentFixture<InfosRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
