import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementNatureComponent } from './procurement-nature.component';

describe('ProcurementNatureComponent', () => {
  let component: ProcurementNatureComponent;
  let fixture: ComponentFixture<ProcurementNatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementNatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
