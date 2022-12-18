import express from "express";
import { getContatos, addContato, updateContato, deleteContato } from "../controllers/contato.js";

const router = express.Router();

router.get("/", getContatos)

router.post("/", addContato)

router.put("/:id", updateContato)

router.delete("/:id", deleteContato)

export default router