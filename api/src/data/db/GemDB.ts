import { MongoClient, Db } from "mongodb";
import "dotenv/config";

type User = {
  address: string;
  gemBalance: number;
  status: string;
}

export default class GemDB {
  dbString: string;
  client: MongoClient;
  db: Db;

  constructor() {
    this.dbString = process.env.STRING || "";
  }

  async connect(): Promise<[MongoClient, Db]>  {
    this.client = new MongoClient(this.dbString);
    this.db = this.client.db(process.env.DBNAME);
  
    return [this.client, this.db];
  }


  async syncRegister(userdata: User): Promise<void> {
    this.db.collection("users").insertOne(userdata);
    console.log(`User ${userdata.address} is registered`);
  }

  async syncMint(address: string, amount: number): Promise<void> 
  {
    if (amount <= 0) throw new Error("Wrong amount");
    this.db.collection("users").updateOne({address}, { $inc: {gemBalance: amount}});
    console.log(`Adding ${amount} gems to ${address}`);
  }

}