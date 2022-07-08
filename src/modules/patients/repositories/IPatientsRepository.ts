import ICreatePatientDTO from '../dtos/ICreatePatientDTO';
import Patient from '../infra/typeorm/entities/Patient';

export default interface IPatientsRepository {
  create(patientData: ICreatePatientDTO): Promise<Patient>
  findById(id: string): Promise<Patient | undefined>
  findBySUS(cartaoSUS: string): Promise<Patient | undefined>
  save(patient: Patient): Promise<Patient>
}
