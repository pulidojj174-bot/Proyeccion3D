import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTemplate } from './projects-template';

describe('ProjectsTemplate', () => {
  let component: ProjectsTemplate;
  let fixture: ComponentFixture<ProjectsTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
