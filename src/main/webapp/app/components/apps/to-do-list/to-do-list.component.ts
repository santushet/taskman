import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { finalize, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { IUser } from 'app/entities/user/user.model';
import dayjs from 'dayjs/esm';
import { priority } from 'app/entities/enumerations/priority.model';
import { status } from 'app/entities/enumerations/status.model';
import { combineLatest, filter, Observable, switchMap, tap } from 'rxjs';
import { FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { UserService } from 'app/entities/user/user.service';

import { EntityArrayResponseType, TaskService } from './task.service';
import { ITask } from './task.model';
import { AddTaskDialogBox } from './add-taskdialog.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  usersSharedCollection: IUser[] = [];

  openAddTaskDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddTaskDialogBox, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ongoing = true;
  pending = true;
  completed = true;

  tasks?: ITask[];
  isLoading = false;

  dataSource: any;

  constructor(
    protected taskService: TaskService,
    public dialog: MatDialog,
    protected userService: UserService,
  ) {}

  ngOnInit(): void {
    this.load();
    // this.loadRelationshipsOptions();
  }

  load(): void {
    this.queryBackend().subscribe({
      next: (res: EntityArrayResponseType) => {
        this.onResponseSuccess(res);
      },
    });
  }

  protected fillComponentAttributesFromResponseBody(data: ITask[] | null): ITask[] {
    return data ?? [];
  }

  protected onResponseSuccess(response: EntityArrayResponseType): void {
    // this.fillComponentAttributesFromResponseHeader(response.headers);
    const dataFromBody = this.fillComponentAttributesFromResponseBody(response.body);
    // console.log(dataFromBody[0].user.login);
    this.tasks = dataFromBody;
    this.dataSource = new MatTableDataSource<ITask>(this.tasks);
  }

  protected queryBackend(page?: number, predicate?: string, ascending?: boolean): Observable<EntityArrayResponseType> {
    this.isLoading = true;
    const pageToLoad: number = page ?? 1;
    const queryObject: any = {
      eagerload: true,
    };
    return this.taskService.query(queryObject).pipe(tap(() => (this.isLoading = false)));
  }

  displayedColumns: string[] = ['title', 'priority', 'status', 'dueDate', 'user', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // protected loadRelationshipsOptions(): void {
  //   this.userService
  //     .query()
  //     .pipe(map((res: HttpResponse<IUser[]>) => res.body ?? []))
  //     // .pipe(map((users: IUser[]) => this.userService.addUserToCollectionIfMissing<IUser>(users, this.task?.user)))
  //     .subscribe((users: IUser[]) => (this.usersSharedCollection = users));
  //     console.log(this.usersSharedCollection);
  // }
}
