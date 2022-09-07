import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordBaseComponent } from './keyword-base.component';

describe('KeywordBaseComponent', () => {
  let component: KeywordBaseComponent;
  let fixture: ComponentFixture<KeywordBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
