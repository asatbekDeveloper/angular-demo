import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialYearCreateComponent } from './financial-year-create.component';

describe('FinancialYearCreateComponent', () => {
  let component: FinancialYearCreateComponent;
  let fixture: ComponentFixture<FinancialYearCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialYearCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialYearCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
