import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCarousel } from './service-carousel';

describe('ServiceCarousel', () => {
  let component: ServiceCarousel;
  let fixture: ComponentFixture<ServiceCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
