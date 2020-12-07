import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import sessionRouter from './sessions.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/sessions', sessionRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
