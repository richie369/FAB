import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsceRegistrationComponent } from './isce-registration.component';

describe('IsceRegistrationComponent', () => {
  let component: IsceRegistrationComponent;
  let fixture: ComponentFixture<IsceRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsceRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsceRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
