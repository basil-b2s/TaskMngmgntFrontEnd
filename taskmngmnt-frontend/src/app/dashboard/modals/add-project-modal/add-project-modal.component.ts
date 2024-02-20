import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrl: './add-project-modal.component.css',
})
export class AddProjectModalComponent {
  @Output() projectAdded = new EventEmitter<any>();
  projectForm: FormGroup;
  showAddProjectModal: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectDescription: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      const projectData = this.projectForm.value;
      this.projectAdded.emit(projectData);
    }
  }

  // closeModal() {
  //   // this.projectAdded.emit(null);
  //   this.showAddProjectModal = false;
  // }
  onCloseModal() {
    // Emit the closeModal event
    this.projectAdded.emit();
  }
}
