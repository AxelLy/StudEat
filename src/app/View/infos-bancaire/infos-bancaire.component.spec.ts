import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosBancaireComponent } from './infos-bancaire.component';

describe('InfosBancaireComponent', () => {
  let component: InfosBancaireComponent;
  let fixture: ComponentFixture<InfosBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosBancaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
