import express from "express";
import { serch, trending } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/serach", serch);

export default globalRouter;