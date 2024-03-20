import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskStatusModalComponent } from './add-task-status-modal.component';

describe('AddTaskStatusModalComponent', () => {
  let component: AddTaskStatusModalComponent;
  let fixture: ComponentFixture<AddTaskStatusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskStatusModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTaskStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
