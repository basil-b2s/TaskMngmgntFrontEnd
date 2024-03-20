import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { group } from '@angular/animations';
import { TaskCreateCreateDto } from '../../interfaces/task-create-dto';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: any = [];
  groupId: any;
  projectId: any;
  loading: boolean = false;
  showAddTaskModal: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.groupId = params.get('groupId');
      this.projectId = params.get('projectId');

      if (this.groupId && this.projectId) {
        this.fetchTasks(this.groupId, this.projectId);
      }
    });
  }

  fetchTasks(groupId: string, projectId: string): void {
    this.loading = true;
    this.taskService.getTasks(groupId, projectId).subscribe(
      (tasks) => {
        // console.log()

        this.tasks = JSON.parse(tasks);
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        this.router.navigate(['/groups']);
      }
    );
  }

  addTask(taskData: TaskCreateCreateDto): void {
    // this.loading = true;
    if (!taskData) {
      this.showAddTaskModal = false;
      return;
    }
    // console.log(taskData);
    this.taskService.addTasks(this.groupId, this.projectId, taskData).subscribe(
      (res) => {
        this.showAddTaskModal = false;
        this.fetchTasks(this.groupId, this.projectId);
        // this.loading = false;
      },
      (err) => {
        console.error(err);
        this.showAddTaskModal = false;
      },
      () => {
        this.showAddTaskModal = false;
      }
    );
  }

  deleteTask(taskId: number): void {
    this.loading = true;
    this.taskService.deleteTask(this.groupId, this.projectId, taskId).subscribe(
      (res) => {
        this.fetchTasks(this.groupId, this.projectId);
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        console.error(err);
      }
    );
  }

  openAddTaskModal(): void {
    this.showAddTaskModal = true;
  }
}
