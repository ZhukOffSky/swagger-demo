import express from "express";
import { VersionController } from "./version.controller";

export const VersionRouter = express.Router();

VersionRouter.get("", VersionController.getVersions);
VersionRouter.post("", VersionController.postVersion);
