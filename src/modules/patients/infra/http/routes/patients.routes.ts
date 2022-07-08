import ensureAuthenticated from '@modules/users/infra/middlewares/ensureAutheticated';
import { Router } from 'express';
// import { celebrate, Segments, Joi } from 'celebrate';

import PatientsController from '../controllers/PatientsController';

const patientsRouter = Router();
const patientsController = new PatientsController();

patientsRouter.post(
  '/',
  ensureAuthenticated,
  // celebrate({
  //   [Segments.BODY]: {
  //     email: Joi.string().email().required(),
  //     password: Joi.string().required(),
  //   },
  // }),
  patientsController.create,
);

export default patientsRouter;
