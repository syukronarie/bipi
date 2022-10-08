import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
  DateTimeResolver,
  DateTimeTypeDefinition,
} from "graphql-scalars";
import { makeExecutableSchema } from "@graphql-tools/schema";
import http from "http";

import app from "./app";
import config from "./config/config";
import db from "./config/db";
import logger from "./config/logger";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const httpServer = http.createServer(app);

const schema = makeExecutableSchema({
  typeDefs: [...scalarTypeDefs, DateTimeTypeDefinition, typeDefs],
  resolvers: [scalarResolvers, { DateTime: DateTimeResolver }, resolvers],
});

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

db.raw("SELECT 1")
  .then(async () => {
    logger.info("PostgreSQL connected");
    await server.start();
    server.applyMiddleware({ app });
    await new Promise((resolve) => {
      // eslint-disable-next-line func-names
      httpServer.listen(config.port, function () {
        logger.info("We are in %s mode", app.settings.env);
        logger.info(
          "Server listening on http://localhost:%d%s",
          this.address().port,
          server.graphqlPath
        );
        resolve();
      });
    });
  })
  .catch((e) => {
    logger.info("PostgreSQL not connected");
    logger.error(e);
  });

const exitHandler = () => {
  if (httpServer) {
    httpServer.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (httpServer) {
    httpServer.close();
  }
});
