require('dotenv').config()

const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')


consign()//Usado para compartilhar todos os modulos dentro de APP
.include('./config/passport.js')
.then('./config/middlewares.js')
.then('./api')
.then('./config/routes.js')
.into(app)

app.db = db

app.listen(3333, () => {
    console.log('backend iniciado')
})
