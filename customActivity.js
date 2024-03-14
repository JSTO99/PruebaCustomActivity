const postmonger = require("./js/postmonger");

var connection = new postmonger.Session();

$(window).ready(onRender);

function onRender(){
   connection.trigger('ready'); 
}

connection.on('initActivity', function( data ){
    if(data) {payload = data; }
});

connection.on('clickedNext',function(){
    payload['metaData'].isConfigured = true;
    connection.trigger('updateActivity', payload);
});