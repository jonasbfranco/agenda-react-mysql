import { db } from "../db.js";

export const getContatos = (_, res) => {
    const q = "SELECT * from contatos";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        
        return res.status(200).json(data);
    });
};