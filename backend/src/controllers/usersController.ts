import con from '../database/connection';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

export default class UserController {

   async create(request:Request, response:Response) {
    
        const { name, lastName, email, password, confirmPassword } = request.body;

        if(password === confirmPassword) {

            try {
                const hashedPassword = await bcrypt.hash(password, 8);

                const [verifyUser] = await con('users').select('*').where({email}).limit(1);

                if(verifyUser === undefined) {
                    await con('users').insert({
                    name: `${name} ${lastName}`,
                    email,
                    password:hashedPassword,
                    avatar:"",
                    whatsapp:"",
                    bio:"",
                    });
                }
                else {
                    return response.json({error: 'User already exists.'})
                }
            
                return response.status(201).send();
            } catch (error) {
                
                console.log(error);
                return response.status(400).send({error: "Unexpected error while creating new user"});

            }
        }
        else {
            return response.json({error:"Passwords do not match."});
        }

    }

}
