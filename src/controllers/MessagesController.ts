import { Request, Response} from "express";
import { MessagesServices } from "../services/MessagesServices";

class MessagesController { 

    async store(req: Request, res: Response) {
        const { admin_id, text, user_id } = req.body
        const messagesService = new MessagesServices();

        const message = await messagesService.store({
            admin_id,
            text,
            user_id
        })

        return res.json(message)
    }

    async messageByUser(req: Request, res: Response) {
        const { id } = req.params;
        
        const messagesService = new MessagesServices ();

        const messages = await messagesService.messageByUser(id);

        return res.json(messages);
    }



}

export { MessagesController }