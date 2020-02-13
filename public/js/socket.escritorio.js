var socket = io();
var searchParams = new URLSearchParams(window.location.search);


//console.log(searchParams.has('escritorio'));

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario'); //throw funciona como return pero fuera de funcion
}

var escritorio = searchParams.get('escritorio');
var label = $('small');
console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        console.log(resp);
        if (!resp.numero) {
            label.text(resp);
        } else {
            label.text('Ticket ' + resp.numero);
        }
    });
})


socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});