import express from "express";
import "reflect-metadata";
import * as swagger from "swagger-express-ts";
import { VersionRouter } from "./version/version.router";
import swaggerUi, { SwaggerUiOptions } from "swagger-ui-express";

const app = express();

const options: SwaggerUiOptions = {
  swaggerOptions: {
    url: "http://localhost:3000/api-docs/swagger.json",
  },
};

app.use("/api-docs/swagger", swaggerUi.serve, swaggerUi.setup(undefined, options));

app.use(
  swagger.express({
    definition: {
      info: {
        title: "My api",
        version: "1.0",
      },
      externalDocs: {
        url: "My url",
      },
      // Models can be defined here
    },
  })
);
app.use("/version", VersionRouter);

app.listen(3000, () => {
  console.info("Server is listening on port : " + 3000);
});
