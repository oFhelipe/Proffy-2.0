import { Router } from 'express'

import ClassesController from './controllers/classesController'
import ConnectionsController from './controllers/connectionsController'
import UserController from './controllers/usersController'
import LoginController from './controllers/loginController'

const routes = Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const userController = new UserController();
const loginController = new LoginController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

routes.post('/users', userController.create);

routes.post('/auth/authenticate', loginController.create);

export default routes;