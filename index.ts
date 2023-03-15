import express from "express";
import { router } from "./src/routes/router";
import cors from 'cors';

export class App{
  public server: express.Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware(){
    this.server.use(express.json());
    this.server.use(cors())
  }

  private router(){
    this.server.use(router);
  }
}
new App().server.listen(8080);