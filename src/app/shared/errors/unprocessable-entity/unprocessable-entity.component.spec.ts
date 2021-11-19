import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprocessableEntityComponent } from './unprocessable-entity.component';

describe('UnprocessableEntityComponent', () => {
  let component: UnprocessableEntityComponent;
  let fixture: ComponentFixture<UnprocessableEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnprocessableEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprocessableEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
