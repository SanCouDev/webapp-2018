// MÉTHODE MODULE CLASS

class Meteo {

  constructor(infos) {
    this.infos = infos;
  }

  getMeteoInformations() {
    
    // ----------------------- OPENWEATHERMAP -----------------------
    $.ajax({
        'url': 'http://api.openweathermap.org/data/2.5/weather?id=6325494&units=metric&APPID=0c98af945c8169d1e0fb538cd4ff153f',
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
        

      // CONSOLE

      console.log("Ville : " + data.name);
      console.log("Température : " + data.main.temp + "ºC");
      console.log("Humidité : " + humidite + "%");
      console.log("Tendance : " + tendance);
      console.log("Icone : " + data.weather[0].icon);

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        window.console.log('errorThrown : ' + textStatus);
    })
    .always(function (jqXHR, textStatus) {
      console.log('Fin de l\'exécution.');
    });
  
    
    return "****** getMeteoInformations() OK. Classe de base.";
  }
}

export default Meteo
