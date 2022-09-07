import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfigCreateComponent } from './payment-config-create.component';

describe('PaymentConfigCreateComponent', () => {
  let component: PaymentConfigCreateComponent;
  let fixture: ComponentFixture<PaymentConfigCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentConfigCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentConfigCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
