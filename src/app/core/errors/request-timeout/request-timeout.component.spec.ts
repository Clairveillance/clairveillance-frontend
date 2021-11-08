import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTimeoutComponent } from './request-timeout.component';

describe('RequestTimeoutComponent', () => {
  let component: RequestTimeoutComponent;
  let fixture: ComponentFixture<RequestTimeoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTimeoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTimeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
