import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreneauPlatComponent } from './creneau-plat.component';

describe('CreneauPlatComponent', () => {
  let component: CreneauPlatComponent;
  let fixture: ComponentFixture<CreneauPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreneauPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreneauPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
