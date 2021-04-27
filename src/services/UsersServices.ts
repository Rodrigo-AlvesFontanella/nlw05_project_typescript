import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UserRepository";


class UsersServices { 

    private usersRepository: Repository<User>;

    constructor () {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async store(email: string) {

        const userExists = await this.usersRepository.findOne({
            email
         })

        if(userExists) { 
           return userExists;
        }

        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user);
    }

    async findByEmail(email:string) {

        const user = await this.usersRepository.findOne({
            email
        })

        return user
    }
    
}

export { UsersServices }
