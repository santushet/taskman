import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { status } from 'app/entities/enumerations/status.model';

import { UserService } from 'app/entities/user/user.service';
import { finalize, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { IUser } from 'app/entities/user/user.model';
import { ITask } from '../task.model';
import { TaskService } from '../task.service';
import { TaskFormService, TaskFormGroup } from '../task-form.service';

@Component({
  selector: 'add-task-dialog',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss'],
})
export class TaskCreateComponent implements OnInit {
  isSaving = false;
  task: ITask | null = null;
  usersSharedCollection: IUser[] = [];

  statusValues = Object.keys(status);

  editForm: TaskFormGroup = this.taskFormService.createTaskFormGroup();

  constructor(
    // public dialogRef: MatDialogRef<AddTaskDialogBox>,
    protected userService: UserService,
    protected taskService: TaskService,
    protected taskFormService: TaskFormService,
  ) {}

  ngOnInit(): void {
    // this.loadRelationshipsOptions();
  }

  protected loadRelationshipsOptions(): void {
    this.userService
      .query()
      .pipe(map((res: HttpResponse<IUser[]>) => res.body ?? []))
      // .pipe(map((users: IUser[]) => this.userService.addUserToCollectionIfMissing<IUser>(users, this.task?.user)))
      .subscribe((users: IUser[]) => (this.usersSharedCollection = users));
    console.log(this.usersSharedCollection);
  }

  save(): void {
    this.isSaving = true;
    const task = this.taskFormService.getTask(this.editForm);
    if (task.id === null) {
      //   this.subscribeToSaveResponse(this.taskService.update(task));
      // } else {
      this.subscribeToSaveResponse(this.taskService.create(task));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITask>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  previousState(): void {
    window.history.back();
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(task: ITask): void {
    this.task = task;
    this.taskFormService.resetForm(this.editForm, task);

    // this.usersSharedCollection = this.userService.addUserToCollectionIfMissing<IUser>(this.usersSharedCollection, task.user);
    // this.employeesSharedCollection = this.employeeService.addEmployeeToCollectionIfMissing<IEmployee>(
    //   this.employeesSharedCollection,
    //   task.employee,
    // );
  }
}
