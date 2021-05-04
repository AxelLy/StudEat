import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRestaurantComponent } from './home-restaurant.component';
import { AppModule } from './../../app.module';

describe('HomeRestaurantComponent', () => {
  let component: HomeRestaurantComponent;
  let fixture: ComponentFixture<HomeRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
