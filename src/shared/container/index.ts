import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IPatientsRepository from '@modules/patients/repositories/IPatientsRepository';
import PatientsRepository from '@modules/patients/infra/typeorm/repositories/PatientsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPatientsRepository>(
  'PatientsRepository',
  PatientsRepository,
);
