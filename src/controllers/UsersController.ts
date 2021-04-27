import { Request, Response } from "express";
import { UsersServices } from "../services/UsersServices";


class UsersController { 

    async store(req: Request, res: Response): Promise<Response>{

        const { email } = req.body
        const usersServices = new UsersServices();

        const user = await usersServices.store(email)
        return res.json(user);
       
    }

}

export { UsersController }