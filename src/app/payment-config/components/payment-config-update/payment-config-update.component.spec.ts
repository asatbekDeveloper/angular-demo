import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfigUpdateComponent } from './payment-config-update.component';

describe('PaymentConfigUpdateComponent', () => {
  let component: PaymentConfigUpdateComponent;
  let fixture: ComponentFixture<PaymentConfigUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentConfigUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentConfigUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
