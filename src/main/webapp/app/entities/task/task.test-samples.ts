import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 10491,
  title: 'correctly while who',
  startDateTime: dayjs('2023-11-15T11:06'),
  endDateTime: dayjs('2023-11-15T01:13'),
  status: 'COMPLETED',
  dueDate: dayjs('2023-11-15'),
};

export const sampleWithPartialData: ITask = {
  id: 19485,
  title: 'gee fondly',
  description: 'yuck volumise versus',
  startDateTime: dayjs('2023-11-15T13:10'),
  endDateTime: dayjs('2023-11-15T12:25'),
  status: 'NOT_STARTED',
  dueDate: dayjs('2023-11-15'),
  attachment: '../fake-data/blob/hipster.png',
  attachmentContentType: 'unknown',
};

export const sampleWithFullData: ITask = {
  id: 10500,
  title: 'menacing however',
  description: 'shingle yowza',
  priority: 'LOW',
  startDateTime: dayjs('2023-11-15T04:31'),
  endDateTime: dayjs('2023-11-15T12:00'),
  status: 'COMPLETED',
  dueDate: dayjs('2023-11-15'),
  attachment: '../fake-data/blob/hipster.png',
  attachmentContentType: 'unknown',
};

export const sampleWithNewData: NewTask = {
  title: 'temporise enthusiastically suburban',
  startDateTime: dayjs('2023-11-14T20:43'),
  endDateTime: dayjs('2023-11-15T09:32'),
  status: 'COMPLETED',
  dueDate: dayjs('2023-11-15'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
