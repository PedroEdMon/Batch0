//API Keys Google Maps     AIzaSyARAYLMhJjG5Eba4AWwUs-PjudcvHbvgf8

/*const request = require('request');

function peticionPromesas(Url){
    return new Promise((resolve,reject)=>{
        request.get(Url,(error,response,body)=>{
            if (response.statusCode == 200){
                var json = JSON.parse(body)
                estado = json.results[0].address_components[5].long_name
                resolve(estado)
            }else{
                reject(`Error ${response.statusCode} al realizar la petición`)
            }
        })
    });
}

function FormatearDireccion(Direccion){
    Direccion = Direccion.replace(' ','+')
    Url = `https://maps.googleapis.com/maps/api/geocode/json?address=${Direccion}&key=${GoogleMapsAPIKey}`
    peticionPromesas(Url).then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

GoogleMapsAPIKey = 'AIzaSyARAYLMhJjG5Eba4AWwUs-PjudcvHbvgf8'
FormatearDireccion('Sindicalismo 4818-A Culiacan') 

*/

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyARAYLMhJjG5Eba4AWwUs-PjudcvHbvgf8'
  });

  googleMapsClient.geocode({
    address: 'sindicalismo 4818A'
  }, (error, response) => {
    if (!error) {
      console.log(response.json.results[0].address_components[5].long_name);
    }else{
        console.log(`Hubo un error ${error} al consultar la dirección`)
    }
  });