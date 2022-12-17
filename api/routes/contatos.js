import express from "express";
import { getContatos } from "../controllers/contato.js";

const router = express.Router();

router.get("/", getContatos)

export default router