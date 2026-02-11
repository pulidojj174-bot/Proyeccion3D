import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionValuesSection } from './mission-values-section';

describe('MissionValuesSection', () => {
  let component: MissionValuesSection;
  let fixture: ComponentFixture<MissionValuesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionValuesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionValuesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
