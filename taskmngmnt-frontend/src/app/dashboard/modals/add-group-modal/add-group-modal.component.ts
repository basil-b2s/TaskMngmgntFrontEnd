import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';
import { GroupCreateDto } from '../../../interfaces/group-create-dto';

@Component({
  selector: 'app-add-group-modal',
  templateUrl: './add-group-modal.component.html',
  styleUrl: './add-group-modal.component.css',
})
export class AddGroupModalComponent {
  @Output() groupAdded = new EventEmitter<any>();
  groupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.groupForm = this.formBuilder.group({
      groupName: [''],
    });
  }
  onSubmit() {
    if (this.groupForm.valid) {
      const groupData: GroupCreateDto = this.groupForm.value;
      this.groupAdded.emit(groupData);
    }
  }
  onCloseModal() {
    this.groupAdded.emit(null);
  }
}
