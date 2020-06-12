const config = require('../knexfile')
const knex = require('knex')(config)
const axios = require('axios')

const aws = require('aws-sdk')
const s3 = new aws.S3()

const qs = require('qs')

const token = process.env.TOKEN_PG
const email = process.env.EMAIL_PG





// Adicionando dias a mais
// const dateconfig = require('date-fns/add')

// let dayOfPagament = dateconfig(new Date, {
//    days: 7
// })
// const datepayment = JSON.stringify(dayOfPagament).slice(1,11)



module.exports = app => {
    const saverifa = async (req,res) => {
        if(!req.body) {
            return res.status(400).send('error nos inputs')
        }
        req.body.userId = req.user.id//o passport coloca dentro da req o usuario, e o id e do passaport
        
        app.db('rifas')
        .insert({
            description: req.body.description, 
            premio: req.body.premio, 
            datasorteio:req.body.datasorteio, 
            valor: req.body.valor,
            maxNumeros: req.body.maxNumeros,
            userID: req.body.userId
        })
        .then(_ => res.status(200).send())
        .catch(err => res.status(400).send(err))
        
    }

    const deleterifa = async function(req,res) {
        knex.select('key').from('images').where({imagesID: req.params.id})
          .then(data => {
            const strings = JSON.stringify(data).slice(9, -3)
             console.log(strings)
             console.log(typeof strings)
                s3.deleteObject({
                Bucket: process.env.AWS_BUCKET,
                Key: strings
             }).promise()
          })
          .catch(err => res.status(500).send(err))

        knex.from('images').where({imagesID: req.params.id}).delete()
        .then(rowsDelete => {
            if(rowsDelete > 0) {
                knex.from('rifas').where({id: req.params.id}).delete()
                .then(_ => res.status(200).send('Ok deletado'))
                .catch(err => res.status(500).send(err))
            }
        })
    
         
    }

    const getRifa = (req, res) => {

        // knex.from('rifas').innerJoin('images', 'rifas.id', 'images.imagesID')
        app.db('rifas')
        .then(rifas => res.status(200).json(rifas))
        .catch(err => res.status(500).send(err))

    }

    const updateDatasorteio = (req, res) => {
        const newDatesorteio = req.body.newDatesorteio
        app.db('rifas')
        .where({id: req.params.id, userID: req.user.id})
        .update({datasorteio: newDatesorteio})
        .then(_ => res.status(200).send('alterado data do sorteio'))
        .catch(err => res.status(500).send(err))
        
    }
    
    const updateDesc = (req, res) => {
        const newDesc = req.body.description
        app.db('rifas')
        .where({id: req.params.id, userID: req.user.id})
        .update({description: newDesc})
        .then(_ => res.status(200).send('Desc alterada'))
        .catch(err => res.status(500).send(err))
    }

     async function buyCheckOut (req, res) {

        const idRifa = req.params.id
        app.db('rifas')
        .where({id: idRifa})
        .then(async data => {

            const { id, description, valor} = data[0]
            let { maxNumeros } = data[0]
            const amount = valor.toFixed(2)

            async function generateNumber () {
                maxNumeros += 1 // adicionando +1 para que sorteio o numero Maximo.
                //pegando todos numeros gerados pelo ID da rifa
                let data = await knex.select('numero_rifa').from('numeros_rifa').where({rifa_id: id})
                //adicionando em um array para conferencia 
                const numeros = percorre => percorre.numero_rifa
                const arrayzinho = data.map(numeros)

                let numberRifa = JSON.stringify(Math.floor(Math.random() * (maxNumeros - 1) + 1))
                console.log(`numero gerado => ${numberRifa}`)


                if (arrayzinho.length === maxNumeros - 1) {
                    console.log('ja foi adicionado o total de numeros para esta rifa')
                } else if (arrayzinho.length === 0) {
                    app.db('numeros_rifa')
                    .insert({
                        numero_rifa: numberRifa,
                        rifa_id: id,
                        user: '1'
                    })
                    .then(console.log('primeiro numero da rifa foi adicionado...'))
                    .catch(err => console.log(err))
                } else {
                   
                    let ajudante = 0 
                    while(ajudante === 0) {
                        let result = arrayzinho.indexOf(numberRifa)
                        console.log(`resultttt ${result}`)
                        if (result === -1) {
                            app.db('numeros_rifa')
                            .insert({
                                numero_rifa: numberRifa,
                                rifa_id: id,
                                user: '1'
                            })
                            .then(console.log(`o numero ${numberRifa} foi adicionado com sucesso..`))
                            .catch(err => console.log(err))
                            ajudante += 1
                
                        }
                        else {
                            numberRifa = JSON.stringify(Math.floor(Math.random() * (maxNumeros - 1) + 1))
                            console.log('else|| caiu no numero com result diferente de -1')
                        }
                    }
                }
                return numberRifa
                             
            }
            const number = await generateNumber() // numero gerado
            const reference = number + '/' + req.user.id

            const params = qs.stringify({
                currency:"BRL",
                itemId1:id,
                itemDescription1:description,
                itemAmount1:amount,
                itemQuantity1:"1",
                itemWeight1:"0",
                reference:reference,
                senderName:req.body.name,
                senderAreaCode:req.body.areacode,
                senderPhone:req.body.phone,
                senderCPF:req.body.cpf,
                senderEmail:req.body.email,
                redirectURL:"http://sitedocliente.com",
                notificationURL:"https://url_de_notificacao.com",
                maxUses:"1",
                maxAge: '3000'
          })

            async function sendData (req,res) {
                try {
                const {data} = await axios.post(`https://ws.sandbox.pagseguro.uol.com.br/v2/checkout?email=${email}&token=${token}`,params)
                const code = data.slice(76, 108)
                console.log(code)
                }
                catch(err) {
                    console.log(err)
                }
                
             }sendData()
            
            
        })
        .catch(err => res.send(err))

        return res.status(200).send(data)
    }   

    return {saverifa, deleterifa, getRifa, updateDatasorteio, updateDesc, buyCheckOut}
}