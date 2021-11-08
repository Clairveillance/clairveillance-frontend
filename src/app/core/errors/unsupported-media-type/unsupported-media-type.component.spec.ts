import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsupportedMediaTypeComponent } from './unsupported-media-type.component';

describe('UnsupportedMediaTypeComponent', () => {
  let component: UnsupportedMediaTypeComponent;
  let fixture: ComponentFixture<UnsupportedMediaTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsupportedMediaTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsupportedMediaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
