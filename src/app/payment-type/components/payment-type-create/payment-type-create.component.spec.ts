import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTypeCreateComponent } from './payment-type-create.component';

describe('PaymentTypeCreateComponent', () => {
  let component: PaymentTypeCreateComponent;
  let fixture: ComponentFixture<PaymentTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTypeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
