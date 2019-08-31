const request = require('request');
const url  = "https://api.darksky.net/forecast/544e0340aa23d1c23b6afa2e5c229d62/37.8267,-122.4233?units=us";
request({url: url,json:true},(error,response)=>{
    if(error){
        console.log("unable to connect weather service");
        //return;
    }else if(response.body.error){
        console.log("Location in invalid");
    }else{       
        console.log(response.body.daily.data[0].summary+" it is currenthy "+response.body.currently.temperature+" degrees out. There is "+response.body.currently.precipProbability+" % chances of rain");   
    }
});
const geourl  = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FydGhhazA4IiwiYSI6ImNqeno5MWlrczEzMjMzbW8xbHFiaXZ4dmIifQ.TYczoTCdwDocmcPDH1dK9g&limit=1";
request({url: geourl,json:true},(error,response)=>{
    //console.log(response.body.currently);
    if(error){
        console.log("unable to connect location service");
        //return;
    }else if(response.body.features.length===0 ){
        console.log("Location in invalid");
    }else{
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    
    console.log(longitude +" "+latitude);
}
});