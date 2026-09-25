import express from "express";
import {Express} from "express";
import "dotenv/config";
import helmet from "helmet";
import cors from "cors";
import { GemRouter } from "../utils/Router.js";
import GemDB from "../data/db/GemDB.js";


export class GemServer {
  app: Express;
  router: GemRouter;
  db: GemDB;

  port: number;
  host: string;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || "");
    this.host = process.env.HOST || ""; 
  }

  setupMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(helmet());
    this.app.use(cors());
    return this;
  }

  connectRouter() {
    this.router = new GemRouter();
    return this;
  }

  connectDB() {
    this.db = new GemDB();
    return this;
  }


}