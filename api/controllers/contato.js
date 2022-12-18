import { db } from "../db.js";

export const getContatos = (_, res) => {
    const q = "SELECT * from usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        
        return res.status(200).json(data);
    });
};

export const addContato = (req, res) => {
    const q = 
        "INSERT INTO usuarios (`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);
        
        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateContato = (req, res) => {
    const q = 
        "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);
        
        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};

export const deleteContato = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id`= ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);
        
        return res.status(200).json("Usuário deletado com sucesso.");
    });
};