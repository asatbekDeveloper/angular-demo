import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementMethodUpdateComponent } from './procurement-method-update.component';

describe('ProcurementMethodUpdateComponent', () => {
  let component: ProcurementMethodUpdateComponent;
  let fixture: ComponentFixture<ProcurementMethodUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementMethodUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementMethodUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
