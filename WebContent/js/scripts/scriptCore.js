/**
 * Script que contiene todos las funciones utilizadas en este ejemplo 
 * @author victorino.hernandez 
 * @date Enero de 2018
 * @version 150120181213 
 */

/**
 * Metodo que se ejecuta al cargarse la pagina inicial
 */
$(document).ready(function(){
   $("#buttonValidar").on("click",function(){
       var nombre = $("#inputAtributo").val();
       var valor = $("#inputValor").val();
       seleccionPorAtributo(nombre,valor);
   });
})

function seleccionPorAtributo(nombre, valor){
    $("#mensajes").text("Se buscan los elementos de tipo input que tengan el atributo: "+nombre+"='"+valor+"'");
    var objects =$("input["+nombre+"='"+valor+"']");
    $("#mensajes").append("  Se obtuvieron:"+objects.length+" elementos");
}