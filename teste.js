const express = require('express')
const {body, validationResult} = require("express-validator")
const fs = require('fs')
const app = express();

app.use(express.json());

app.post("/contas-a-receber", [
    //Verificar funções corretamente.
    body("descricao"),
    body("valor"),
    body("datadecompetencia"),
    body("datadecaixa"),
    body("contato"),
], (req, res) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }           

    fs.writeFileSync("teste.json", JSON.stringify(response))
    return res.status(200).json({message:"Conta salva!"});

});

app.get("/contas-a-receber/relatorios", (req, res) => {
    fs.readFileSync("teste.json", (arquivo) => { 
        return res.status(200).json(arquivo);
    });
})

app.listen(8084, () => {
    console.log("Servidor rodando!")
})
