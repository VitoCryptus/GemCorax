import { Router, Express } from "express";
import { HOME, MINE } from "./routes.js";
import MineController from "#controllers/MineController.js";
import HomeController from "#controllers/HomeController.js";
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

  plugToServer(app: Express) {
    console.log("Plugging to the server");
    app.use("/", this.#router);
    return this;
  }

  configRoutes() {
    // this.#post(MINE, MineController.apply(this.#db));
    this.#post(MINE, MineController.apply);
    this.#get(HOME, HomeController.apply);
    return this;
  }

  #post(path: string, controller: any) {
    return this.#router.post(path, controller);
  }

  #get(path: string, controller: any) {
    return this.#router.get(path, controller);
  }
}
