import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementNatureCreateComponent } from './procurement-nature-create.component';

describe('ProcurementNatureCreateComponent', () => {
  let component: ProcurementNatureCreateComponent;
  let fixture: ComponentFixture<ProcurementNatureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementNatureCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementNatureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
