const { Router } = require('express')
const express = require('express')
const Routes = express.Router()
const controller = require('../controller/controller')




Routes.get('/', controller.Home)
Routes.get('/games', controller.Game)

Routes.post('/product', function(req,res){
    console.log(req.body)
    res.send({
        message: 'sucsessful to insert data',
        statusCode: 200
    })
})
Routes.get('/login', (req, res) => {
     res.render('login')
})
 
Routes.post('/login', controller.login)
Routes.post('/register', controller.Register)
Routes.get('/register', controller.RegisterView)

Routes.get('/produk', (req, res) => {
    res.render('produk')
})

Routes.post('/produk', (req, res) => {
    let dataProduk = {
        xomay: { nama: 'redmi 12 promax', ram: '100Gb' },
        ipin: { nama: 'ipin note 7', ram: '200gb' },
        oddo: { nama: 'oddo 90', ram: '90gb' },
        shap: { nama: 'tv tabung 12inch', ram: '15GB' },
        polytron: { nama: 'tv tabung 13inch', ram: '15GB' },
        acer: { nama: 'mesin cuci', ram: '15GB' },
        lenovo: { nama: 'sepeda lipat', ram: '2GB' },
        hp: { nama: 'kulkas', ram: '15GB' },
        toyota: { nama: 'boba enak', ram: '15GB' },
        honda: { nama: 'crv 2023', ram: '15GB' }
    };
    console.log(req.body)
    res.send(dataProduk)
})

Routes.post('/games',controller.GameHistory)
Routes.get('/games/score/:id',controller.getScore)


Routes.get('/super-user',controller.superView)
Routes.get('/detail-user', controller.modalDetail)
Routes.post('/super-user', controller.userUpdate)
Routes.get('/remove/:id', controller.deleteUser)
Routes.get('/user-profile/:id', controller.profileUser)
Routes.post('/user-profile/:id',controller.updateProfile)
// Routes.post('/update-profil',controller.updateProfile)

module.exports = Routes



// app.get('/', function (request, response) {
//     response.sendFile(__dirname + '/views/index.html')
// })

// Routes.get('/product', function (request, response) {
//     // response.sendFile(__dirname + '/views/index.html')
//     hgahdgah
//     response.sendStatus(404)
// })