var agenda = document.getElementById('agenda');
var textarea = document.getElementById('textarea');

$('#textarea').on('input', function() {
  localStorage.agenda = textarea.value;
  agenda.innerHTML = localStorage.agenda;
});
