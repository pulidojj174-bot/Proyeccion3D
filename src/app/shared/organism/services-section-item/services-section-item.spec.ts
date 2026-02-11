import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSectionItem } from './services-section-item';

describe('ServicesSectionItem', () => {
  let component: ServicesSectionItem;
  let fixture: ComponentFixture<ServicesSectionItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSectionItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesSectionItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
