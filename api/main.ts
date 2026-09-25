// import GemServer from "./src/server/Server.ts"
import GemServer from "./src/server/Server.ts";

const server: GemServer = new GemServer();
await server.setupMiddlewares().connectDB();
server.connectRouter().runServer();
