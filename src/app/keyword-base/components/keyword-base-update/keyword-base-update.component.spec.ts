import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordBaseUpdateComponent } from './keyword-base-update.component';

describe('KeywordBaseUpdateComponent', () => {
  let component: KeywordBaseUpdateComponent;
  let fixture: ComponentFixture<KeywordBaseUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordBaseUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordBaseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
