import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { UserService } from 'app/entities/user/user.service';
import { finalize, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { IUser } from 'app/entities/user/user.model';

@Component({
  selector: 'add-task-dialog',
  templateUrl: './add-task-dialog.html',
})
export class AddTaskDialogBox implements OnInit {
  usersSharedCollection: IUser[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogBox>,
    protected userService: UserService,
  ) {}

  ngOnInit(): void {
    this.loadRelationshipsOptions();
  }

  protected loadRelationshipsOptions(): void {
    this.userService
      .query()
      .pipe(map((res: HttpResponse<IUser[]>) => res.body ?? []))
      // .pipe(map((users: IUser[]) => this.userService.addUserToCollectionIfMissing<IUser>(users, this.task?.user)))
      .subscribe((users: IUser[]) => (this.usersSharedCollection = users));
    console.log(this.usersSharedCollection);
  }

  close() {
    this.dialogRef.close(true);
  }
}
