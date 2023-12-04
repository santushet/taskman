import { Component, OnInit } from '@angular/core';
import { CustomizerSettingsService } from '../customizer-settings/customizer-settings.service';
import { EntityArrayResponseType, DepartmentService } from './department.service';
import { combineLatest, filter, Observable, switchMap, tap } from 'rxjs';
import { IDepartment } from './department.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  departments?: IDepartment[];
  isLoading = false;

  constructor(
    public themeService: CustomizerSettingsService,
    protected departmentService: DepartmentService,
  ) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.queryBackend().subscribe({
      next: (res: EntityArrayResponseType) => {
        this.onResponseSuccess(res);
      },
    });
  }

  protected queryBackend(): Observable<EntityArrayResponseType> {
    this.isLoading = true;
    // const queryObject: any = {
    //   sort: this.getSortQueryParam(predicate, ascending),
    // };
    return this.departmentService.query().pipe(tap(() => (this.isLoading = false)));
  }

  protected onResponseSuccess(response: EntityArrayResponseType): void {
    const dataFromBody = this.fillComponentAttributesFromResponseBody(response.body);
    this.departments = dataFromBody;
  }

  protected fillComponentAttributesFromResponseBody(data: IDepartment[] | null): IDepartment[] {
    return data ?? [];
  }
}
