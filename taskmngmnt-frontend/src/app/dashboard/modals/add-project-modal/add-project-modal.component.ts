import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectCreateDto } from '../../../interfaces/project-create-dto';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrl: './add-project-modal.component.css',
})
export class AddProjectModalComponent {
  @Output() projectAdded = new EventEmitter<any>();
  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      projectName: [''],
      projectDescription: [''],
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      const projectData: ProjectCreateDto = this.projectForm.value;
      console.log(projectData);
      this.projectAdded.emit(projectData);
    }
  }

  onCloseModal() {
    this.projectAdded.emit(null);
  }
}
