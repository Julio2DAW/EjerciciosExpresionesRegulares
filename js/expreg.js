/**
    regexp.js
    Archivo para realizar validaciones de expresiones regulares en js
    @Author Julio Antonio Ramos Gago <jramosgago.guadalupe@alumnado.fundacionloyola.net>
    @license GPL v3 2021
**/

'use strict'

window.onload=iniciar

function iniciar(){
    document.getElementById('iIP').onblur=comprobar
}

function comprobar(){
    console.log('Comprobar...');
    let exp1=new RegExp(/^(\d{1,3}\.){3}\d{1,3}/)
    if(!document.getElementById('iIP').value.match(exp1)){
        console.log('IP Errónea');
    }
}