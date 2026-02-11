import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsMarqueeSection } from './clients-marquee-section';

describe('ClientsMarqueeSection', () => {
  let component: ClientsMarqueeSection;
  let fixture: ComponentFixture<ClientsMarqueeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsMarqueeSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsMarqueeSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
