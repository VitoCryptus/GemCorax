import GemDB from "#data/db/GemDB.js";
import { Response, Request } from "express";

import Controller from "./Controller.ts";

export default class MineController extends Controller {
  static apply = 
  // (db: GemDB) => 
    async (req: Request, res: Response) => {
    const { address, amount } = req.body;
    // await db.syncMint(address, amount);
    res
      .json({
        success: true,
        message: `${amount} gems are added to ${address}`,
      })
      .status(200);
  };
}
