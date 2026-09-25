import GemDB from "../data/db/GemDB.js";
import { Response, Request } from "express";


export class MintController {

  apply = (db: GemDB) => (req: Request, res: Response) => {
    const { address, amount } = req.body;
    db.syncMint(address, amount);
    res.json({
      success: true,
      message: `${amount} gems are added to ${address}`
    }).status(200);
    
  }
}