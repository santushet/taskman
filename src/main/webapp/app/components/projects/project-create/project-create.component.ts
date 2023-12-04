import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

import { IDepartment } from '../department.model';
import { DepartmentService } from '../department.service';
import { DepartmentFormService, DepartmentFormGroup } from './department-form.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss'],
})
export class ProjectCreateComponent implements OnInit {
  isSaving = false;
  department: IDepartment | null = null;
  editForm: DepartmentFormGroup = this.departmentFormService.createDepartmentFormGroup();

  categories = new FormControl('');
  categoriesList: string[] = ['Design', 'UI/UX Design', 'Development', 'App', 'Develop', 'Angular'];

  members = new FormControl('');
  membersList: string[] = ['Alvarado Turner', 'Evangelina Mcclain', 'Candice Munoz', 'Bernard Langley', 'Kristie Hall', 'Bolton Obrien'];

  constructor(
    protected departmentService: DepartmentService,
    protected departmentFormService: DepartmentFormService,
  ) // protected activatedRoute: ActivatedRoute,
  {}

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(({ department }) => {
    //   this.department = department;
    //   if (department) {
    //     this.updateForm(department);
    //   }
    // });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const department = this.departmentFormService.getDepartment(this.editForm);
    // if (department.id !== null) {
    //   this.subscribeToSaveResponse(this.departmentService.update(department));
    // } else {
    if (department.id === null) {
      this.subscribeToSaveResponse(this.departmentService.create(department));
    }
    // }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDepartment>>): void {
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

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(department: IDepartment): void {
    this.department = department;
    this.departmentFormService.resetForm(this.editForm, department);
  }
}
