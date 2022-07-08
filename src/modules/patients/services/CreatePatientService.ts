import { inject, injectable } from 'tsyringe';

import ICreatePatientDTO from '../dtos/ICreatePatientDTO';
import IPatientsRepository from '../repositories/IPatientsRepository';
import Patient from '../infra/typeorm/entities/Patient';

@injectable()
class CreatePatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  public async execute(input: ICreatePatientDTO): Promise<Patient> {
    const patient = this.patientsRepository.create(input);

    return patient;
  }
}

export default CreatePatientService;
