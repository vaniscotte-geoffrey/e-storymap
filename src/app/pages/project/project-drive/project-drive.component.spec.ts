import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDriveComponent } from './project-drive.component';

describe('ProjectDriveComponent', () => {
  let component: ProjectDriveComponent;
  let fixture: ComponentFixture<ProjectDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
