import express from "express";
import { deleteVideo, edit, seeVideo, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload",upload);
videoRouter.get("/:id(\\d+)",seeVideo);
videoRouter.get("/:id(\\d+)/edit",edit);
videoRouter.get("/:id(\\d+)/delete",deleteVideo);

export default videoRouter;