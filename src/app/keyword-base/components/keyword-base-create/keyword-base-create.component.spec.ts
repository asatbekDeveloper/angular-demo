import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordBaseCreateComponent } from './keyword-base-create.component';

describe('KeywordBaseCreateComponent', () => {
  let component: KeywordBaseCreateComponent;
  let fixture: ComponentFixture<KeywordBaseCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordBaseCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordBaseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
