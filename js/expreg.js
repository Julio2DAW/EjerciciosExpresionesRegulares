/**
    regexp.js
    Archivo para realizar validaciones de expresiones regulares en js
    @Author Julio Antonio Ramos Gago <jramosgago.guadalupe@alumnado.fundacionloyola.net>
    @license GPL v3 2021
**/

'use strict'

window.onload=iniciar

function iniciar(){
    document.getElementById('iMatricula').onblur = comprobar //Matrícula Coche Nuevo
    document.getElementById('iMatriculaVieja').onblur = comprobar //Matrícula Coche Viejo
    document.getElementById('iDNI').onblur = comprobar //DNI
    document.getElementById('iFecha').onblur = comprobar //Fecha
    document.getElementById('iIP').onblur = comprobar //IP
}

function comprobar(){

    //Ejercicio 1 -> Matrícula Coche Nuevo
    let exp1 = new RegExp(/\d{4}[A-Z]{3}/)
    if(!document.getElementById('iMatricula').value.match(exp1)){
        console.log('Matrícula Errónea')
    }else{
        console.log('Matrícula Correcta')
    }
    
    //Ejercicio 2 -> Matrícula Coche Viejo
    let exp2 = new RegExp(/([A-Z]{2}\d{4}[A-Z]{1,2})|([A-Z]{1}\d{5})/)
    if(!document.getElementById('iMatriculaVieja').value.match(exp2)){
        console.log('Matrícula Vieja Errónea')
    }else{
        console.log('Matrícula Vieja Correcta')
    }

    //Ejercicio 3 -> DNI
    let exp3 = new RegExp(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/)
    if(!document.getElementById('iDNI').value.match(exp3)){
        console.log('DNI Erróneo')
    }else{
        console.log('DNI Correcto')
    }

    //Ejercicio 4 -> Fecha
    let exp4 = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[/\\/](19|20)\d{2}$/)
    if(!document.getElementById('iFecha').value.match(exp4)){
        console.log('Fecha Errónea')
    }else{
        console.log('Fecha Correcta')
    }

    //Ejercicio 15 -> IP
    let exp15 = new RegExp(/^(\d{1,3}\.){3}\d{1,3}/)
    if(!document.getElementById('iIP').value.match(exp15)){
        console.log('IP Errónea')
    }else{
        console.log('IP Correcta')
    }
    
}