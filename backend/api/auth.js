const authSecret = process.env.authSecret
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')


module.exports = app => {
    const signin = async (req,res) => {
        if(!req.body.email || !req.body.password) {
            return res.status(400).send('Dados incompletos')
        }
    const user = await app.db('users')  
    .where({email:req.body.email})
    .first()
    if (user) {
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if(err || !isMatch) {
                   return res.status(401).send("errrrro")
                }
                const payload = {id: user.id}//se passou de todos if, ele validou o user e vai armazenar o valor no token
                const token = jwt.encode(payload, authSecret)
                res.status(200).json({token:token})
                
            })
        }
        else {
            res.status(400).send('Usuario nao encontrado')
        }
    }

    const logoff = async function (req,res) {
      if(req.headers.authorization && req.headers.authorization.split(' ') [0] === 'Bearer')
      return console.log(req.headers.authorization)
    }
   return { signin, logoff}
}