import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 26501,
};

export const sampleWithPartialData: IEmployee = {
  id: 18867,
  lastName: 'Schowalter',
  hireDate: dayjs('2023-12-04T01:37'),
};

export const sampleWithFullData: IEmployee = {
  id: 11318,
  firstName: 'Rosemary',
  lastName: 'Labadie',
  email: 'Elda43@yahoo.com',
  phoneNumber: 'dig brownie joshingly',
  hireDate: dayjs('2023-12-04T06:40'),
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
