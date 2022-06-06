const express = require('express')
const fs = require('fs')
const app = express();

app.use(express.json());

app.post("/contas-a-receber", (req, res) => {
    const response = {
        descricao: req.body.descricao,
        valor: req.body.valor,
        datadecompetencia: req.body.datadecompetencia,
        datadecaixa: req.body.datadecaixa,
        contato: req.body.contato
    };

    fs.writeFileSync("teste.json", JSON.stringify(response))
    return res.send("Conta salva com sucesso!");

});

app.get("/contas-a-receber/relatorios", (req, res) => {
    fs.readFile('teste.json', (err, arquivo) => {
        res.writeHead(200, { 'Content-Type': 'text/txt' });
        res.write(arquivo);

        return res.end();
    });
})

app.listen(8083, () => {
    console.log("Servidor rodando!")
})

