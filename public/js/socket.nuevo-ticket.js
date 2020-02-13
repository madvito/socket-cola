//establecer conexion
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdio conexion con el servidor');
});

socket.on('estadoActual', function(data) {
    label.text(data.actual);
});

socket.on('siguienteTicket', function(siguiente) {
    console.log(siguiente);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) { //mensaje,parametros,funcion al recibir callback
        label.text(siguienteTicket);
    });
});