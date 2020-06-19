const bcrypt = require('bcrypt-nodejs') // usado para criptografar senhas

module.exports = app => {
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(password,salt,null,(err,hash) => 
                callback(hash)
)
        })
      
    }
    const save = (req,res) => {
        if(!req.body) {
            return res.status(400).send('error nos inputs')
        }
        obterHash(req.body.password, hash => {
            const password = hash
            app.db('users')
            .insert({name: req.body.name,email: req.body.email, password})
            .then(data => res.status(200).send(data))
            .catch(err => res.status(400).send('Error ao criar a conta'))
        })
    }
    
    const updatePass = async (req, res) => {
        const obterHash = (password, callback) => {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, null, (err,hash) => callback(hash))
            })
            
        }
        obterHash(req.body.password, hash => {
            const password = hash
            app.db('users')
            .where({id: req.user.id})
            .update({password})
            .then(_ => res.status(200).send('Senha alterada'))
            .catch(err => res.status(500))
        })
    }
    return {save, updatePass}
}