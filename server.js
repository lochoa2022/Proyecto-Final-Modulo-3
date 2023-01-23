const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 3000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'diplomado'
}

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Bienvenido a mi API')
})

app.use('/usuario', routes)

app.listen(app.get('port'), ()=>{
    console.log('El servidor corre en el puerto', app.get('port'))
})