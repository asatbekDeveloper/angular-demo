import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTypeUpdateComponent } from './payment-type-update.component';

describe('PaymentTypeUpdateComponent', () => {
  let component: PaymentTypeUpdateComponent;
  let fixture: ComponentFixture<PaymentTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTypeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
