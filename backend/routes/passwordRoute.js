import { Router } from "express";
import { getPass } from "../controllers/passwordController";

const passRouter = Router();

passRouter.get("/").use(getPass);

export default passRouter;