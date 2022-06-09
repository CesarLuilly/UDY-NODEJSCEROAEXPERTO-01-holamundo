//  //Todos estas instrucciones son NoBloqueantes, inclusive los settimeout son no bloqueantes
//  //a menos de que internamente nosotros tuvieramos algo que realmente calcule el tiempo.
//  //En este caso el settimeout su contenido no es bloqueante ya que se esta tratando de un 
//  //consolelog.

console.log('Inicio de programa');

setTimeout(() => {
    //  //Aqui lo que hacemos es decir que este consololog lo va a ejecutar en 3 segundos.
    console.log("Primer TimeOut.");
}, 3000);

setTimeout(() => {
    //  //Aqui lo que decimos es que este console log lo va a ejecutar en 0 segundos.
    console.log("Segund TimeOut.");
}, 0);

setTimeout(() => {
    //  //Aqui lo que decimos es que este console log lo va a ejecutar en 0 segundos.
    console.log("Tercer TimeOut.");
}, 0);


console.log('Fin de programa');