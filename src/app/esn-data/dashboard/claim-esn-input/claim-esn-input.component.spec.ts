import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimEsnInputComponent } from './claim-esn-input.component';

describe('ClaimEsnInputComponent', () => {
  let component: ClaimEsnInputComponent;
  let fixture: ComponentFixture<ClaimEsnInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimEsnInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimEsnInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
