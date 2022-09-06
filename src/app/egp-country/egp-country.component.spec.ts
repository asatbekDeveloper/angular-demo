import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgpCountryComponent } from './egp-country.component';

describe('EgpCountryComponent', () => {
  let component: EgpCountryComponent;
  let fixture: ComponentFixture<EgpCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgpCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgpCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
