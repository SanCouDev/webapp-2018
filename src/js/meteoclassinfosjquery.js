// MÉTHODE MODULE CLASS


import {capLettre} from './module';

class Meteo {

  constructor(infos) {
    this.infos = infos;
      
    console.log("ici: " + this.infos.villeID);
    console.log("ici: " +  this.infos.units);
  }

  getMeteoInformations(infos) {
      var maClef = "0c98af945c8169d1e0fb538cd4ff153f";
      var maRequete = 'http://api.openweathermap.org/data/2.5/weather?id='+this.infos.villeID+'&lang='+this.infos.langue+'&units='+this.infos.units+'&APPID='+maClef;
    
    // ----------------------- OPENWEATHERMAP -----------------------
    $.ajax({
        'url': maRequete,
          'type': 'GET',
          'format': 'json',
          'cache': 'false', 
          'dataType': 'json'
                                                                                                                           
    }).done(function (data, textStatus, jqXHR) {

       // DONNÉES DE LA JOURNÉE.
      console.dir(data);

      //
      const tendance = data.weather[0].description;
      const ville = data.name;
      const temperature = data.main.temp;
      const humidite = data.main.humidity;
      const francais = capLettre(data.weather[0].description);  

      // CONSOLE

      console.log("Ville : " + data.name); 
      console.log("Température : " + data.main.temp + "ºC");
      console.log("Humidité : " + humidite + "%");
      console.log("Tendance : " + tendance);
      console.log("Icone : " + data.weather[0].icon);
      console.log("Tendance : " + francais);
        
        
//     AFFICHAGE HTML  
        
       $(".ville").html( "<h2>" + data.name + "</h2>");
       $("#temperature").html("<h2>" + data.main.temp + "ºC" + "</h2>");
       $("#humidite").html("<h2>" + data.main.humidity + "%" + "</h2>");
       $("#tendance").html("<h2>" + capLettre(data.weather[0].description) + "</h2>");

        
//    AFFICHAGE SVG
        
        let imgsource = "";
        const chemin ="img/";
        
        switch (tendance) {
        case "Rain":
            imgsource = chemin + "rain.svg";
            break;
        case "Clear":
            imgsource = chemin + "sunny.svg";  
            break;
        case "Clouds":
            imgsource = chemin + "cloudy.svg"; 
            break;
        case "Snow":
            imgsource = chemin + "snow.svg"; 
            break;
        default:
            imgsource = chemin + "variable.svg"; 
        }
        
        
        //image
        $("#imgmeteo").html(`<img src="${imgsource}" alt=" width="128" height="128">`);
        
    })
      
    .fail(function (jqXHR, textStatus, errorThrown) {
        window.console.log('errorThrown : ' + textStatus);
    })
      
    .always(function (jqXHR, textStatus) {
      console.log('Fin de l\'exécution.');
    });
  
    
    return "****** getMeteoInformations() OK. Affichage avec jquery.";
  }
}

export default Meteo
