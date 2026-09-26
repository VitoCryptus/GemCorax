import { Request, Response } from "express";
import Controller from "./Controller.ts";

export default class HomeController extends Controller {
  static apply = async (req: Request, res: Response) => {
    console.log("Received");
    res.json({
      success: true,
    }).status(200);
  }
}