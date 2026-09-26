import GemServer from "#server/Server.js";

const server: GemServer = new GemServer();
await server.setupMiddlewares().runServer().setupRouter();
