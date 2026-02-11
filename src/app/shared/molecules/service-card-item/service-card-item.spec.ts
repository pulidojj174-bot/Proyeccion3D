import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCardItem } from './service-card-item';

describe('ServiceCardItem', () => {
  let component: ServiceCardItem;
  let fixture: ComponentFixture<ServiceCardItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCardItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCardItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
