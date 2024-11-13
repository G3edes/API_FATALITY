/*******************************************
 * Objetivo: 
 * Data:13/11/2024
 * Autor:Gabriel Silva Guedes
 * Versão:1.0
 *******************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//INICIA A UTILIZACAO DO EXPRESS
const app= express()

app.use((request, response, next)=>{
    //Permissao de onde virao a requisicao na API
    //('*')-Fica liberado para qualquer maquina
    //('ip')-restringe para uma maquina
    response.header('Access-Control-Allow-Origin', '*')
    //Permissão de quais metodos a API irá responder

    /******Metodo do HTTP*********\
    |> get - pegar dados da api   |
    |> post- inserir dados na api |
    |> put- alterar algo na api   |
    |> delete- deletar algo na api|
    \*****************************/

    response.header('Access-Control-Allow-Methods','GET')
    //Aplica as restricoes para o CORS da requisicao
    app.use(cors())
    next()
})