import { Request, response, Response} from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingsServices } from "../services/SettingsServices";

class SettingsController { 

    async store(req: Request, res: Response) {

        const { chat, username } = req.body
        const settingsServices = new SettingsServices();

        try {

            const settings = await settingsServices.store({ chat, username })
            return res.json(settings);

        } catch (err) {
            return res.status(400).json({
                message: err.message
            })
        }
    }

    async findByUserName (req: Request, res: Response) {

        const { username } = req.params
        const settingsServices = new SettingsServices();

        const settings = await settingsServices.findByUserName(username);
        return res.json(settings);
    }

    async update (req: Request, res: Response) {
        const { username } = req.params
        const { chat } = req.body
        const settingsServices = new SettingsServices();

        const settings = await settingsServices.update(username, chat);
        return res.json(settings);
    }

}

export { SettingsController }