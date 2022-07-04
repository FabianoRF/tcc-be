import { inject, injectable } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import ICreatePatientDTO from '../dtos/ICreatePatientDTO';

@injectable()
class CreatePatientService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute(input: ICreatePatientDTO): Promise<User> {
    const user = this.usersRepository.create(input);

    return user;
  }
}

export default CreatePatientService;
