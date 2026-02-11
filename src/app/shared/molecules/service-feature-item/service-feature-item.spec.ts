import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFeatureItem } from './service-feature-item';

describe('ServiceFeatureItem', () => {
  let component: ServiceFeatureItem;
  let fixture: ComponentFixture<ServiceFeatureItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceFeatureItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFeatureItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
