import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreatePatientService from '@modules/patients/services/CreatePatientService';

export default class PatientsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createUser = container.resolve(CreatePatientService);

    const patient = await createUser.execute(body);

    return response.json(patient);
  }
}
