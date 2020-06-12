const bodyParser = require('body-parser') 
const cors = require('cors') // abilita req de aplicacoes diferentes

module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(cors({
        origin: '*'
    }))

}