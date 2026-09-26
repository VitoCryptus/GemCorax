import { Router } from "express";
import { MINT } from "./routes.js";
import { MintController } from "#controllers/MintController.js";
import GemDB from "#data/db/GemDB.js";


export default class GemRouter {
  #router: Router;
  #db: GemDB;

  constructor() {
    this.#router = Router();
  }

  async connectDB() {
    this.#db = new GemDB();
    await this.#db.connect();
    return this;
  }

  configRoutes() {
    this.#post(MINT, MintController.apply(this.#db));
    return this;
  }

  #post(path: string, controller: any) {
    return this.#router.post(path, controller);
  }

  #get(path: string, controller: any) {
    return this.#router.get(path, controller);
  }
}
