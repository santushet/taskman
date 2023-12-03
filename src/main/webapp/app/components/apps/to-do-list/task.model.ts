import dayjs from 'dayjs/esm';
import { IUser } from 'app/entities/user/user.model';
import { priority } from 'app/entities/enumerations/priority.model';
import { status } from 'app/entities/enumerations/status.model';

export interface ITask {
  id: number;
  title?: string | null;
  description?: string | null;
  priority?: keyof typeof priority | null;
  startDateTime?: dayjs.Dayjs | null;
  endDateTime?: dayjs.Dayjs | null;
  status?: keyof typeof status | null;
  dueDate?: dayjs.Dayjs | null;
  // attachment?: string | null;
  // attachmentContentType?: string | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
}

export type NewTask = Omit<ITask, 'id'> & { id: null };
