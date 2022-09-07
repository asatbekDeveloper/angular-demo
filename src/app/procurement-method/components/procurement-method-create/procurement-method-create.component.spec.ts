import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementMethodCreateComponent } from './procurement-method-create.component';

describe('ProcurementMethodCreateComponent', () => {
  let component: ProcurementMethodCreateComponent;
  let fixture: ComponentFixture<ProcurementMethodCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementMethodCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementMethodCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
