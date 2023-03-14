import { Request, Response } from "express";
import { UserDatabase } from "../../database/UserDatabase";

export class UserController{

  static async users(req:Request, res:Response) {
    return res.json({
      response: 'Hello World'
    });
  }

  static async newUser(req:Request, res:Response) {
    try {
      const {name, role} = req.body
      const age = +req.body.age
      await UserDatabase.InsertUser({name, age, role})
      res.status(202).json({message: 'created'})
    } catch (error: any) {
      res.status(400).json(new Error(error))
    }
  }
}