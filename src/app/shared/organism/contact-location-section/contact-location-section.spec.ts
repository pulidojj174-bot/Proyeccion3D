import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLocationSection } from './contact-location-section';

describe('ContactLocationSection', () => {
  let component: ContactLocationSection;
  let fixture: ComponentFixture<ContactLocationSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactLocationSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactLocationSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
