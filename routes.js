const express = require('express')
const routes = express.Router()

//LISTAR
routes.get('/', (req,res)=>{
   req.getConnection((err, conn)=>{
    if(err) return  res.send(err)

    conn.query('SELECT * FROM usuarios', (err,rows)=>{

        res.json(rows)
    })
   })
})

//INSERTAR
routes.post('/', (req,res)=>{
    req.getConnection((err, conn)=>{
     if(err) return  res.send(err)
 
     conn.query('INSERT INTO usuarios set?', [req.body],(err,rows)=>{
         if(err) return res.send(err)
         res.send('Datos de Usuario Registrado !')
     })
    })
 })

 //ELIMINAR
 routes.delete('/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
     if(err) return  res.send(err)
 
     conn.query('DELETE FROM usuarios WHERE id=?', [req.params.id],(err,rows)=>{
         if(err) return res.send(err)
         res.send('El Usuario a sido Eliminado!')
     })
    })
 })

 //PROMEDIO
 routes.get('/promedio', (req,res)=>{
    req.getConnection((err, conn)=>{
     if(err) return  res.send(err)
 
     conn.query('SELECT AVG(edad) AS Promedio_Edad FROM usuarios', (err,rows)=>{
 
         res.json(rows)
     })
    })
 })

 //STATUS
 routes.get('/status', (req,res)=>{
    const data = {
        nameSystem: "api-users",
        version: "0.0.1",
        developer: "Lito José Ochoa Mérida",
        email: "litito8@hotmail.com"
    }
    res.status(200).json(data)
 })

module.exports = routes
