import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementNatureUpdateComponent } from './procurement-nature-update.component';

describe('ProcurementNatureUpdateComponent', () => {
  let component: ProcurementNatureUpdateComponent;
  let fixture: ComponentFixture<ProcurementNatureUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementNatureUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementNatureUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
