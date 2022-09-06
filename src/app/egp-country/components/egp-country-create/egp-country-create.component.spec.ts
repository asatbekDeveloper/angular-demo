import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgpCountryCreateComponent } from './egp-country-create.component';

describe('EgpCountryCreateComponent', () => {
  let component: EgpCountryCreateComponent;
  let fixture: ComponentFixture<EgpCountryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgpCountryCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgpCountryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
