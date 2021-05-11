import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsPreparationComponent } from './temps-preparation.component';

describe('TempsPreparationComponent', () => {
  let component: TempsPreparationComponent;
  let fixture: ComponentFixture<TempsPreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempsPreparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempsPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
