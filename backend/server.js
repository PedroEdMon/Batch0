const express = require('express')

var app = express()

app.get('/',(request,response) => {
    response.send('Hola Mundo express')
});

app.get('/user',(request,response) => {
    response.send({message:"Ruta de user"})
});

app.get('/user/:uid',(request,response) => {
    let {uid} = request.params
    response.send({message:"El id que escribiste es " + uid})
});

app.get('/busqueda',(request,response) => {
    let {q,nombre} = request.query
    response.send({q:q,name:nombre})
})


app.post('/create/user',(request,response) => {
    let {nombre,apellido} = request.body

})

app.listen(3000,() => {
    console.log('Servidor en 8080')
})