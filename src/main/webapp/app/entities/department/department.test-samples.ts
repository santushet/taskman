import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 1228,
  departmentName: 'likewise incidentally',
};

export const sampleWithPartialData: IDepartment = {
  id: 4056,
  departmentName: 'er overspend opposite',
};

export const sampleWithFullData: IDepartment = {
  id: 25111,
  departmentName: 'bah huzzah thoughtfully',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'at',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
