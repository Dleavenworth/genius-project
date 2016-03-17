var agenda = document.getElementById('agenda');
var textarea = document.getElementById('textarea');

$('#textarea').on('input', function() {
  agenda.innerHTML = textarea.value;
});
