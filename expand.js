/*$(function() {
    var trigger = $('.trigger');
    var form = $('.header-search-box');
    trigger.click(function() {
        if(form.is(':hidden')) {
            form.show().focus()
        }
        form.animate({
            'width': form.width() == 200 ? '0px' : '200px'
        }, 'fast', function() {
            if (form.width() == 0) {
                form.hide();
            }
        });
    });
});*/
var trigger = document.getElementById("trigger");
trigger.addEventListener("click", expand)
function expand() {
    document.getElementById("form").style.display="block"
}
