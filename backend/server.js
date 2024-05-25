import http from "node:http";
import fs from "node:fs";
import cors from "cors";
import express from "express";
import { v4 as generateID } from "uuid";

const locationDataBase = "./users.json";
const PORT = 3333;

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

app.get('/users', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT");
    res.setHeader('Access-Control-Allow-Headers', "Content-Type");

    fs.readFile(locationDataBase, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Erro interno no servidor" });
        }

        let jsonData = [];
        try {
            jsonData = JSON.parse(data);
        } catch (error) {
            console.log("Erro ao extrair o JSON de " + locationDataBase + ", Error" + error);
        }

        res.status(200).json(jsonData);
    });
});

app.post('/users', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT");
    res.setHeader('Access-Control-Allow-Headers', "Content-Type");

    fs.readFile(locationDataBase, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Erro interno no servidor" });
        }

        let jsonData = [];
        try {
            jsonData = JSON.parse(data);
        } catch (error) {
            console.log("Erro ao extrair o JSON de " + locationDataBase + ", Error" + error);
        }

        const newUser = req.body;
        if (newUser.name && newUser.email && newUser.password) {
            newUser.id = generateID();
            jsonData.push(newUser);
            fs.writeFile(locationDataBase, JSON.stringify(jsonData, null, 2), (err) => {
                if (err) {
                    return res.status(500).json({ message: "Não foi possível inserir os dados" });
                }

                res.status(201).json(newUser);
            });
        } else {
            res.status(500).json({ message: "Campos preenchidos incorretamente!" });
        }
    });
});

server.listen(PORT);
