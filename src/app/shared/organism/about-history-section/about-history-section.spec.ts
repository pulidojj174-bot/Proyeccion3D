import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHistorySection } from './about-history-section';

describe('AboutHistorySection', () => {
  let component: AboutHistorySection;
  let fixture: ComponentFixture<AboutHistorySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHistorySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHistorySection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
