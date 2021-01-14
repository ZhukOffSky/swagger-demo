import express from "express";
import {
  ApiOperationGet,
  ApiOperationPost,
  ApiPath,
  SwaggerDefinitionConstant,
} from "swagger-express-ts";
import { Version } from "./version.model";

@ApiPath({
  path: "/version",
  name: "Version",
  security: { basicAuth: [] },
})
class VersionControllerClass {

  public data = [
    {
      id: "1",
      name: "Version 1",
      description: "Description Version 1",
      version: "1.0.0",
    },
    {
      id: "2",
      name: "Version 2",
      description: "Description Version 2",
      version: "2.0.0",
    },
  ];

  @ApiOperationGet({
    description: "Get versions objects list",
    summary: "Get versions list",
    responses: {
      200: {
        description: "Success",
        type: SwaggerDefinitionConstant.Response.Type.ARRAY,
        model: Version.name,
      },
    },
    security: {
      apiKeyHeader: [],
    },
    path: "/get",
  })
  public getVersions(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ): void {
    response.json(this.data);
  }

  @ApiOperationPost({
    description: "Post version object",
    summary: "Post new version",
    parameters: {
      body: { description: "New version", required: true, model: Version.name },
    },
    responses: {
      200: { description: "Success" },
      400: { description: "Parameters fail" },
    },
    path: "/post",
  })
  public postVersion(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ): void {
    if (!request.body) {
      return response.status(400).end();
    }
    this.data.push(request.body);
    response.json(request.body);
  }
}

export const VersionController = new VersionControllerClass();
