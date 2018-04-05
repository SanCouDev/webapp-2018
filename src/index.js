
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import

import './css/main.css';
import './scss/main.scss';

//pour importer tout ce qui a ans le node module

import * as outils from './js/module';

import moment from 'moment';
import 'moment/locale/fr';

//CLASS METEO

//import Meteo from './js/meteoclassbase';
//import Meteo from './js/meteoclassinfosjquery';
import Meteo from './js/meteoclassinfoshandlebars';

//-----------------------------Meteo--------------------------------

var datedujour = document.querySelector('.date');
var maintenant = moment();


function dateDuJour(){
    console.log("Date du jour: " + maintenant.format('LLLL'));   
    datedujour.innerHTML = outils.capLettre(maintenant.format('LLLL'));
}


//-----------------------------CLASS MÉTÉO--------------------------------



function meteoDuJour(){
    const infosMeteo = {
        "villeID":"6325494",
        "units":"metric",
        "langue":"en"
};

    const maMeteo = new Meteo(infosMeteo);
    const msgMeteo = maMeteo.getMeteoInformations();
}

$(document).ready(function() {
    
    dateDuJour();
    meteoDuJour();

});


