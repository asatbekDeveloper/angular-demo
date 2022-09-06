import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgpCountryUpdateComponent } from './egp-country-update.component';

describe('EgpCountryUpdateComponent', () => {
  let component: EgpCountryUpdateComponent;
  let fixture: ComponentFixture<EgpCountryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgpCountryUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgpCountryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
