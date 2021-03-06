const express = require('express')
const fs = require('fs')
const app = express();

app.use(express.json());

app.post("/contas-a-receber", (req, res) => {
try {
    
    if (!req.body.descricao) {
        return res.status(400).json({message: "A descrição da conta não foi informada, verifique" })
    }; 
    if (!req.body.valor) {
        return res.status(400).json({message: "O valor da conta não foi informado, verifique"})
    };
    if (!req.body.data_de_competencia) {
        return res.status(400).json({message: "A data de competencia não foi informada, verifique"})
    };
    if (!req.body.data_de_caixa) {
        return res.status(400).json({message: "A data de caixa não foi informada, verifique"})
    };    
    if (!req.body.contato) {
        return res.status(400).json({message: "O contato da conta não foi informada, verifique"})
    }; 

    const response = {
        descricao: req.body.descricao,
        valor: req.body.valor,
        data_de_competencia: req.body.data_de_competencia,
        data_de_caixa: req.body.data_de_caixa,
        contato: req.body.contato
    };

    fs.writeFile('teste.json', JSON.stringify(response, null, 2), () =>{
        return res.status(200).json({message: "Conta salva com sucesso!"})
    });

}   catch (error) {
        return res.status(500).json({message: "Erro ao tentar salvar o arquivo"})
    };

});
app.get("/contas-a-receber/relatorios", (req, res) => {
    fs.readFile("teste.json", (err, arquivo) => {
    if (err) {
        return res.status(400).json({message: "O Relatório solicitado não existe"})
    }
        let jeison = JSON.parse(arquivo)
        return res.status(200).json(jeison)
    })

});

app.listen(8083, () => {
        console.log("Servidor rodando http://localhost:8083")
})