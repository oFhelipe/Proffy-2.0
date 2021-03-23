import con from '../database/connection';
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class LoginConnection {

    async create(request:Request, response:Response){

        const { email, password } = request.body;

        const [ user ] = await con('users').select('*').where({email}).limit(1);   

        if(!user){
            return response.json({error:"User not found."});
        }

        
        const verifyUser = await bcrypt.compare(password, user.password);

        if(!verifyUser) {
            return response.json({error:'Wrong credentials.'});
        }
        
        const token = jwt.sign({id:user.id}, "secret");
        
        return response.status(201).json({ token, user_id:user.id });
    }
    
}