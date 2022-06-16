const express = require('express')
const fs = require('fs')
const app = express();

app.use(express.json());

app.post("/contas-a-receber", (req, res) => {

    if (!req.body.descricao) {
        return res.status(400).json({ message: "A descrição da conta não foi informada, verifique" })
    }

    if (!req.body.valor) {
        return res.status(400).json({ message: "O valor da conta não foi informado, verifique" })
    }

    if (!req.body.data_de_competencia) {
        return res.status(400).json({ message: "A data da conta não foi informada, verifique" })
    }

    if (!req.body.data_de_caixa) {
        return res.status(400).json({ message: "A descrição da conta não foi informada, verifique" })
    }

    if (!req.body.contato) {
        return res.status(400).json({ message: "O contato da conta não foi informada, verifique" })
    }
    const response = {
        descricao: req.body.descricao,
        valor: req.body.valor,
        datadecompetencia: req.body.data_de_competencia,
        datadecaixa: req.body.data_de_caixa,
        contato: req.body.contato
    };

    fs.writeFileSync("teste.json", JSON.stringify(response))
    return res.status(200).json({ message: "Conta salva com sucesso!" });

});

app.get("/contas-a-receber/relatorios", (req, res) => {
    //testando essa parte
    fs.readFile('teste.json', (err, arquivo) => {

        if (err) {
            return res.status(400).json({ message: "Erro" })
        };

        return res.status(200).json(arquivo);


    });
});

app.listen(8083, () => {
    console.log("Servidor rodando http://localhost:8083")
})

