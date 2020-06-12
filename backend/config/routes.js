const multer = require('multer')
const multerConfig = require('./multer')

const axios =  require('axios')

const config = require('../knexfile')
const knex = require('knex')(config)

const qs = require('qs')

const token = process.env.TOKEN_PG
const email = process.env.EMAIL_PG



module.exports = app => {
    app.post('/signup', app.api.users.save)
    app.post('/signin', app.api.auth.signin)
    app.get('/allrifas', app.api.rifas.getRifa) 

    app.route('/rifas') 
       .all(app.config.passport.authenticate())
       .post(app.api.rifas.saverifa)

   app.route('/images/:id')
      .all(app.config.passport.authenticate())
      .post( multer(multerConfig).single("file"), async (req,res) => {
      const {originalname: name, size, key, location: url = ''} = req.file
      await app.db('images')
      .insert({
         name,
         size,
         key,
         url,
         imagesID: req.params.id
      })
      .catch(err => res.status(400).send(err))
      return res.status(200).send(console.log("FILE UPLOAD 100%"))
   })

    app.route('/rifas/:id')
       .all(app.config.passport.authenticate())   
       .delete(app.api.rifas.deleterifa)
       .put(app.api.rifas.updateDatasorteio)

    app.route('/rifas/updatedesc/:id')
       .all(app.config.passport.authenticate())
       .put(app.api.rifas.updateDesc)

    app.route('/user/updatepass')
       .all(app.config.passport.authenticate())
       .put(app.api.users.updatePass)

   app.route('/compra/:id')
      .all(app.config.passport.authenticate())
      .post(app.api.rifas.buyCheckOut)


   app.post('/notif', async function (req,res) {
  
      return console.log(JSON.stringify(req.body))
   })

   app.post('/teste/:id', app.api.rifas.buyCheckOut)
   app.get('/tester', async function (req,res) {
    try {                         
      const {response } = await axios.get(`https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=816797CA2F2F1B5CC489AF9547566F35`)
      return res.status(200).send(response)
    }
     catch(err) {
        return res.status(500).send(err)
     }
   })

}
