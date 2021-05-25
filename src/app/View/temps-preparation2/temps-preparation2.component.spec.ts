import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsPreparation2Component } from './temps-preparation2.component';

describe('TempsPreparation2Component', () => {
  let component: TempsPreparation2Component;
  let fixture: ComponentFixture<TempsPreparation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempsPreparation2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempsPreparation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
