import User from '../infra/typeorm/entities/User';
import ICreatePatientDTO from '../dtos/ICreatePatientDTO';

export default interface IPatientsRepository {
  create(data: ICreatePatientDTO): Promise<User>;
}
