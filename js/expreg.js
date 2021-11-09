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
    document.getElementById('iCP').onblur = comprobar //CP
    document.getElementById('iEmail').onblur = comprobar //Email
    document.getElementById('iTlfnN').onblur = comprobar //TlfnN
    document.getElementById('iMovil').onblur = comprobar //Movil
    document.getElementById('iTlfnI').onblur = comprobar //TlfnI
    document.getElementById('iNumE').onblur = comprobar //NumE
    document.getElementById('iNumR').onblur = comprobar //NumR
    document.getElementById('iURL').onblur = comprobar //URL
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

    //Ejercicio 5 -> CP
    let exp5 = new RegExp(/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/)
    if(!document.getElementById('iCP').value.match(exp5)){
        console.log('Código Postal Erróneo')
    }else{
        console.log('Código Postal Correcto')
    }

    //Ejercicio 6 -> Email
    let exp6 = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/)
    if(!document.getElementById('iEmail').value.match(exp6)){
        console.log('Correo Erróneo')
    }else{
        console.log('Correo Correcto')
    }

    //Ejercicio 7 -> TlfnN
    let exp7 = new RegExp(/(+34|0034|34)?[ -](8|9)[ -]([0-9][ -]*){8}/)
    if(!document.getElementById('iTlfnN').value.match(exp7)){
        console.log('Teléfono Erróneo')
    }else{
        console.log('Teléfono Correcto')
    }

    //Ejercicio 8 -> Movil
    let exp8 = new RegExp(/(+34|0034|34)?[ -](6|7)[ -]([0-9][ -]*){8}/)
    if(!document.getElementById('iMovil').value.match(exp8)){
        console.log('Móvil Erróneo')
    }else{
        console.log('Móvil Correcto')
    }

    //Ejercicio 9 -> TlfnI
    let exp9 = new RegExp(/--/)
    if(!document.getElementById('iTlfnI').value.match(exp9)){
        console.log('Teléfono Internacional Erróneo')
    }else{
        console.log('Teléfono Internacional Correcto')
    }

    //Ejercicio 10 -> NumE
    let exp10 = new RegExp(/^\d+$/)
    if(!document.getElementById('iNumE').value.match(exp10)){
        console.log('Número Entero Erróneo')
    }else{
        console.log('Número Entero Correcto')
    }

    //Ejercicio 11 -> NumR
    let exp11 = new RegExp(/^-?\d+(.\d+)?$/)
    if(!document.getElementById('iNumR').value.match(exp11)){
        console.log('Número Real Erróneo')
    }else{
        console.log('Número Real Correcto')
    }

    //Ejercicio 12 -> URL
    let exp12 = new RegExp(/(http|ftp|https)://([\w-]+(?:(?:.[\w-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])/)
    if(!document.getElementById('iURL').value.match(exp12)){
        console.log('URL Erróneo')
    }else{
        console.log('URL Correcto')
    }

    //Ejercicio 15 -> IP
    let exp15 = new RegExp(/^(\d{1,3}\.){3}\d{1,3}/)
    if(!document.getElementById('iIP').value.match(exp15)){
        console.log('IP Errónea')
    }else{
        console.log('IP Correcta')
    }
    
}