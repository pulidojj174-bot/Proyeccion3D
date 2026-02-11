import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedMap } from './embedded-map';

describe('EmbeddedMap', () => {
  let component: EmbeddedMap;
  let fixture: ComponentFixture<EmbeddedMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbeddedMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbeddedMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
