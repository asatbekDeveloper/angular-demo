import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialYearUpdateComponent } from './financial-year-update.component';

describe('FinancialYearUpdateComponent', () => {
  let component: FinancialYearUpdateComponent;
  let fixture: ComponentFixture<FinancialYearUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialYearUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialYearUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
