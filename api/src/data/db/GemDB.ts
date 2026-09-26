import { MongoClient, Db } from "mongodb";
import { config } from "dotenv";
config();

console.log("STR:", process.env.STRING);
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
  
  getDB() {
    return this.db;
  }
  
  // Upgraded version of sync which uses syncRegister and syncMint
  async syncUser(userData: User, amount: number) {
    if (await this.db.collection("users").findOne({address: userData.address})) {
      this.syncMint(userData.address, amount);
    } else {
      this.syncRegister(userData);
    }
  }
  // This function updates the database after a user mints for the first time
  async syncRegister(userdata: User): Promise<void> {
    this.db.collection("users").insertOne(userdata);
    console.log(`User ${userdata.address} is registered`);
  }

  // This function updates the database after a user mints 
  async syncMint(address: string, amount: number): Promise<void> 
  {
    if (amount <= 0) throw new Error("Wrong amount");
    this.db.collection("users").updateOne({address}, { $inc: {gemBalance: amount}});
    console.log(`Adding ${amount} gems to ${address}`);
  }

}