import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

import { IUser } from '../user-management.model';
import { UserManagementService } from '../user-management.service';

const userTemplate = {} as IUser;

const newUser: IUser = {
  activated: true,
} as IUser;

@Component({
  selector: 'create-user-dialog',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  authorities: string[] = [];
  isSaving = false;

  editForm = new FormGroup({
    id: new FormControl(userTemplate.id),
    login: new FormControl(userTemplate.login, {
      nonNullable: true,
    }),
    firstName: new FormControl(userTemplate.firstName, { validators: [] }),
    lastName: new FormControl(userTemplate.lastName, { validators: [] }),
    email: new FormControl(userTemplate.email, {
      nonNullable: true,
    }),
    activated: new FormControl(userTemplate.activated, { nonNullable: true }),
    authorities: new FormControl(userTemplate.authorities, { nonNullable: true }),
  });

  constructor(private userService: UserManagementService) {}

  ngOnInit(): void {
    // this.route.data.subscribe(({ user }) => {
    //   if (user) {
    //     this.editForm.reset(user);
    //   } else {
    this.editForm.reset(newUser);
    //   }
    // });
    // this.userService.authorities().subscribe(authorities => (this.authorities = authorities));
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const user = this.editForm.getRawValue();
    if (user.id !== null) {
      this.userService.update(user).subscribe({
        next: () => this.onSaveSuccess(),
        error: () => this.onSaveError(),
      });
    } else {
      this.userService.create(user).subscribe({
        next: () => this.onSaveSuccess(),
        error: () => this.onSaveError(),
      });
    }
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}
