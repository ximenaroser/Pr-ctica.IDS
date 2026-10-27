const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'public')))


app.get ('/api/asludo', (request, response)=>{
    response.json({mensaje: 'Hola desde mi app _____(iniciales)'})
})

app.listen(PORT, ()=>{
    console.log (`Servidor corriendo en el puerto http://localhost:${PORT}`)
})



