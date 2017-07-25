

var table_data = [ { "first_name" : "Rose",
                     "last_name"  : "Tyler",
                     "home"       : "Earth" },
                   { "first_name" : "Zoe",
                     "last_name"  : "Heriot",
                     "home"       : "Space Station W3"},
                   { "first_name" : "Jo",
                     "last_name"  : "Grant",
                     "home"       : "Earth"},
                   { "first_name" : "Leela",
                     "last_name"  : null,
                     "home"       : "Unspecified"},
                   { "first_name" : "Romana",
                     "last_name"  : null,
                     "home"       : "Gallifrey"},
                   { "first_name" : "Clara",
                     "last_name"  : "Oswald",
                     "home"       : "Earth"},
                   { "first_name" : "Adric",
                     "last_name"  : null,
                     "home"       : "Alzarius"},
                   { "first_name" : "Susan",
                     "last_name"  : "Foreman",
                     "home"       : "Gallifrey"} ];
var table_body = $('#information tbody');
var headings = ["first_name", "last_name", "home"];
$.each(table_data, function(key, value) {
  var row = $('<tr>');
  $.each(headings, function(key, heading) {
  	$('<td>').html(value[heading]).appendTo(row);
  });
  table_body.append(row);
})