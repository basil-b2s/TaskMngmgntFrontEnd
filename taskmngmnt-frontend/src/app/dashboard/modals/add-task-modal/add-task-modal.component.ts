import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskCreateCreateDto } from '../../../interfaces/task-create-dto';
import { TaskStatusService } from '../../../services/task-status.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskStatusCreateDto } from '../../../interfaces/task-status-create-dto';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.css',
})
export class AddTaskModalComponent implements OnInit {
  @Output() taskAdded = new EventEmitter<any>();
  taskForm!: FormGroup;
  groupId: any;
  projectId: any;
  statusData: any = [];
  loading : boolean = false;
  showAddTaskStatusModal: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private taskStatusService: TaskStatusService,
    private route: ActivatedRoute,
    private router : Router
  ) {
    this.taskForm = this.formBuilder.group({
      description: [''],
      dueDate: [''],
      assigneeMail: [''],
      currentStatusId: [''],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.groupId = params.get('groupId');
      this.projectId = params.get('projectId');

      if (this.groupId && this.projectId) {
        this.fetchTaskStatus(this.groupId, this.projectId);
      }
    });
  }

  fetchTaskStatus(groupId: string, projectId: string): void {
    // this.loading = true;
    this.taskStatusService.getTaskStatus(groupId, projectId).subscribe(
      (status) => {
        this.statusData = JSON.parse(status);
        // this.loading = false;
        console.log(this.statusData);
      },
      (err) => {
        this.loading = false;
        this.router.navigate(['/groups']);
      }
    );
  }
  onSubmit() {
    if (this.taskForm.valid) {
      const taskData: TaskCreateCreateDto = this.taskForm.value;
      console.log(taskData);
      this.taskAdded.emit(taskData);
    }
  }
  onCloseModal() {
    this.taskAdded.emit(null);
  }

  addTaskStatus(taskStatus: TaskStatusCreateDto) {
    if (!taskStatus) {
      this.showAddTaskStatusModal = false;
      return;
    }
    // this.taskStatusService.
    this.taskStatusService.addTaskStatus(this.groupId, this.projectId, taskStatus).subscribe(
      (res) => {
        this.fetchTaskStatus(this.groupId, this.projectId);
      },
      (err) => {
        console.error(err);
      },
      () => {
        this.showAddTaskStatusModal = false;
      }
    );
    // console.log(taskStatus);
  }

  openAddStatusModal(): void {
    this.showAddTaskStatusModal = true;
  }
}
