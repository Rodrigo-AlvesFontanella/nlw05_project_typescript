import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/message";
import { MessagesRepository } from "../repositories/MessageRepository";

interface IMessageCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessagesServices {
    
    private messagesRepository: Repository<Message>;


    constructor () {
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }


    async store({ admin_id, text, user_id }: IMessageCreate ) {
        
        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        });

        await this.messagesRepository.save(message);

        return message;
    }

    async messageByUser (user_id: string) {

        const messages = await this.messagesRepository.find({
            where: { user_id },
            relations: ["user"]
        })

        return messages;
        
    }

    
}

export { MessagesServices }