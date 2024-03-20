import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskStatusCreateDto } from '../../../interfaces/task-status-create-dto';

@Component({
  selector: 'app-add-task-status-modal',
  templateUrl: './add-task-status-modal.component.html',
  styleUrl: './add-task-status-modal.component.css',
})
export class AddTaskStatusModalComponent {
  @Output() taskStatusAdded = new EventEmitter<any>();
  taskStatusForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.taskStatusForm = this.formBuilder.group({
      statusText: [''],
      statusColor: [''],
    });
  }

  onSubmit() {
    if (this.taskStatusForm.valid) {
      const taskData: TaskStatusCreateDto = this.taskStatusForm.value;
      console.log(taskData);
      this.taskStatusAdded.emit(taskData);
    }
  }
  onCloseModal() {
    this.taskStatusAdded.emit(null);
  }
}
