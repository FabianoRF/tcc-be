import { getRepository, Repository } from 'typeorm';

import Patient from '../entities/Patient';
import ICreatePatientDTO from '@modules/patients/dtos/ICreatePatientDTO';
import IPatientsRepository from '@modules/patients/repositories/IPatientsRepository';

class PatientsRepository implements IPatientsRepository {
  private ormRepository: Repository<Patient>;

  constructor() {
    this.ormRepository = getRepository(Patient);
  }

  public async create(patientData: ICreatePatientDTO): Promise<Patient> {
    const patient = this.ormRepository.create(patientData);

    await this.ormRepository.save(patient);

    return patient;
  }

  public async findById(id: string): Promise<Patient | undefined> {
    const patient = await this.ormRepository.findOne(id);

    return patient;
  }

  public async findBySUS(cartaoSUS: string): Promise<Patient | undefined> {
    const patient = await this.ormRepository.findOne({
      where: { cartaoSUS },
    });

    return patient;
  }

  public async save(patient: Patient): Promise<Patient> {
    return this.ormRepository.save(patient);
  }
}

export default PatientsRepository;
