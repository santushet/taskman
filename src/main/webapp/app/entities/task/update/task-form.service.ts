import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { ITask, NewTask } from '../task.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITask for edit and NewTaskFormGroupInput for create.
 */
type TaskFormGroupInput = ITask | PartialWithRequiredKeyOf<NewTask>;

/**
 * Type that converts some properties for forms.
 */
type FormValueOf<T extends ITask | NewTask> = Omit<T, 'startDateTime' | 'endDateTime'> & {
  startDateTime?: string | null;
  endDateTime?: string | null;
};

type TaskFormRawValue = FormValueOf<ITask>;

type NewTaskFormRawValue = FormValueOf<NewTask>;

type TaskFormDefaults = Pick<NewTask, 'id' | 'startDateTime' | 'endDateTime'>;

type TaskFormGroupContent = {
  id: FormControl<TaskFormRawValue['id'] | NewTask['id']>;
  title: FormControl<TaskFormRawValue['title']>;
  description: FormControl<TaskFormRawValue['description']>;
  priority: FormControl<TaskFormRawValue['priority']>;
  startDateTime: FormControl<TaskFormRawValue['startDateTime']>;
  endDateTime: FormControl<TaskFormRawValue['endDateTime']>;
  status: FormControl<TaskFormRawValue['status']>;
  dueDate: FormControl<TaskFormRawValue['dueDate']>;
  attachment: FormControl<TaskFormRawValue['attachment']>;
  attachmentContentType: FormControl<TaskFormRawValue['attachmentContentType']>;
  user: FormControl<TaskFormRawValue['user']>;
  employee: FormControl<TaskFormRawValue['employee']>;
};

export type TaskFormGroup = FormGroup<TaskFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class TaskFormService {
  createTaskFormGroup(task: TaskFormGroupInput = { id: null }): TaskFormGroup {
    const taskRawValue = this.convertTaskToTaskRawValue({
      ...this.getFormDefaults(),
      ...task,
    });
    return new FormGroup<TaskFormGroupContent>({
      id: new FormControl(
        { value: taskRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      title: new FormControl(taskRawValue.title, {
        validators: [Validators.required],
      }),
      description: new FormControl(taskRawValue.description),
      priority: new FormControl(taskRawValue.priority),
      startDateTime: new FormControl(taskRawValue.startDateTime, {
        validators: [Validators.required],
      }),
      endDateTime: new FormControl(taskRawValue.endDateTime, {
        validators: [Validators.required],
      }),
      status: new FormControl(taskRawValue.status, {
        validators: [Validators.required],
      }),
      dueDate: new FormControl(taskRawValue.dueDate, {
        validators: [Validators.required],
      }),
      attachment: new FormControl(taskRawValue.attachment),
      attachmentContentType: new FormControl(taskRawValue.attachmentContentType),
      user: new FormControl(taskRawValue.user),
      employee: new FormControl(taskRawValue.employee),
    });
  }

  getTask(form: TaskFormGroup): ITask | NewTask {
    return this.convertTaskRawValueToTask(form.getRawValue() as TaskFormRawValue | NewTaskFormRawValue);
  }

  resetForm(form: TaskFormGroup, task: TaskFormGroupInput): void {
    const taskRawValue = this.convertTaskToTaskRawValue({ ...this.getFormDefaults(), ...task });
    form.reset(
      {
        ...taskRawValue,
        id: { value: taskRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): TaskFormDefaults {
    const currentTime = dayjs();

    return {
      id: null,
      startDateTime: currentTime,
      endDateTime: currentTime,
    };
  }

  private convertTaskRawValueToTask(rawTask: TaskFormRawValue | NewTaskFormRawValue): ITask | NewTask {
    return {
      ...rawTask,
      startDateTime: dayjs(rawTask.startDateTime, DATE_TIME_FORMAT),
      endDateTime: dayjs(rawTask.endDateTime, DATE_TIME_FORMAT),
    };
  }

  private convertTaskToTaskRawValue(
    task: ITask | (Partial<NewTask> & TaskFormDefaults),
  ): TaskFormRawValue | PartialWithRequiredKeyOf<NewTaskFormRawValue> {
    return {
      ...task,
      startDateTime: task.startDateTime ? task.startDateTime.format(DATE_TIME_FORMAT) : undefined,
      endDateTime: task.endDateTime ? task.endDateTime.format(DATE_TIME_FORMAT) : undefined,
    };
  }
}
