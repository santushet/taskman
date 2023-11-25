import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 20700,
  title: 'why hard-to-find',
  startDateTime: dayjs('2023-11-15T20:36'),
  endDateTime: dayjs('2023-11-15T07:58'),
  status: 'NOT_STARTED',
  dueDate: dayjs('2023-11-15'),
};

export const sampleWithPartialData: ITask = {
  id: 11095,
  title: 'oh flugelhorn behalf',
  priority: 'LOW',
  startDateTime: dayjs('2023-11-14T21:17'),
  endDateTime: dayjs('2023-11-15T19:51'),
  status: 'IN_PROGRESS',
  dueDate: dayjs('2023-11-15'),
  attachment: '../fake-data/blob/hipster.png',
  attachmentContentType: 'unknown',
};

export const sampleWithFullData: ITask = {
  id: 9399,
  title: 'globalize',
  description: 'upright revolt',
  priority: 'LOW',
  startDateTime: dayjs('2023-11-15T05:16'),
  endDateTime: dayjs('2023-11-15T13:21'),
  status: 'NOT_STARTED',
  dueDate: dayjs('2023-11-15'),
  attachment: '../fake-data/blob/hipster.png',
  attachmentContentType: 'unknown',
};

export const sampleWithNewData: NewTask = {
  title: 'since',
  startDateTime: dayjs('2023-11-15T04:36'),
  endDateTime: dayjs('2023-11-15T09:26'),
  status: 'IN_PROGRESS',
  dueDate: dayjs('2023-11-15'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
