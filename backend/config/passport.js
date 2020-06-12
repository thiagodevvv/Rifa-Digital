//vai olhar o token jwt para ver se tem acesso a outras aplicacoes que necessitam
//passport.js eh um middle de seguranca
const authSecret = process.env.authSecret
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt =  require('passport-jwt').ExtractJwt    


module.exports = app => {
  
//Estrategia que so funcionou com o token no postman    

    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),//onde esta o jwt apartir do resquest
        secretOrKey: authSecret,
    }

    passport.use(new JwtStrategy(opts,(payload, done) => {
        app.db('users')
        .where({id: payload.id})//pegando o uusuario pelo id
        .first()
        .then( user => {//se obter o user
            if(user) {
                done(null, {id: user.id, email: user.email})//deu certo a authenticacao
            }
            else {
                done(null,false)//nao authenticou o user
            }
        })
        .catch(err => done(err,false))//Caso ocorra algum erro na authenticacao
        
    }))
    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', {session: false})//params: estrategia, e que nao eh uma sessao
    }
    

   
}