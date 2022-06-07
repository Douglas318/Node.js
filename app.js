const express = require('express')
const fs = require('fs')
const app = express();

app.use(express.json());

app.post("/contas-a-receber", (req, res) => {
    
    if(!req.body.descricao || typeof req.body.descricao == undefined || req.body.descricao == null ) {
        res.status(400).json({message: "Descrição Inválida"})
    }
    
    if(!req.body.valor || typeof req.body.valor == undefined || req.body.valor == null ) {
        res.status(400).json({message: "Valor Inválido"})
    }
    
    if(!req.body.datadecompetencia || typeof req.body.datadecompetencia == undefined || req.body.datadecompetencia == null ) {
        res.status(400).json({message: "Data Inválida"})
    }
        
    if(!req.body.datadecaixa || typeof req.body.datadecaixa == undefined || req.body.datadecaixa == null ) {
        res.status(400).json({message: "Descrição Inválida"})
    }    
    
    if(!req.body.contato || typeof req.body.contato == undefined || req.body.contato == null ) {
        res.status(400).json({message: "Contato Inválido"})
    } else {
        const response = {
            descricao: req.body.descricao,
            valor: req.body.valor,
            datadecompetencia: req.body.datadecompetencia,
            datadecaixa: req.body.datadecaixa,
            contato: req.body.contato
        };

        fs.writeFileSync("teste.json", JSON.stringify(response))
        return res.status(200).json({message:"Conta salva com sucesso!"});
    }
});

app.get("/contas-a-receber/relatorios", (req, res) => {
    fs.readFileSync('teste.json', (err, arquivo) => {
        return res.status(200).json({message: "Erro."})
    });
})

app.listen(8083, () => {
    console.log("Servidor rodando!")
})

