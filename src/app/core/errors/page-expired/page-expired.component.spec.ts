import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExpiredComponent } from './page-expired.component';

describe('PageExpiredComponent', () => {
  let component: PageExpiredComponent;
  let fixture: ComponentFixture<PageExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageExpiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
