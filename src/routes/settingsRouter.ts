import { Router } from "express";
import { MessagesController } from "../controllers/MessagesController";
import { SettingsController } from "../controllers/SettingsController";
import { UsersController } from "../controllers/UsersController";


const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post('/settings', settingsController.store);
routes.get('/settings/:username', settingsController.findByUserName);
routes.put('/settings/:username', settingsController.update);

routes.post('/users', usersController.store);

routes.post('/messages', messagesController.store);
routes.get('/messages/:id', messagesController.messageByUser);



export { routes }