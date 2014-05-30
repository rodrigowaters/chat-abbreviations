var list_language;
function onLocalized() {
    var l10n = document.webL10n;
    list_language = document.querySelectorAll('#index nav ul li a');
    var total_language = list_language.length;
    for (var i = 0; i < total_language; i++) {
        list_language.item(i).onclick = function() {
            var language = this.id;
            var language_text = this.text;
            l10n.setLanguage(language || language_text);
        };
    }
}
$(document).ready(function() {
    document.webL10n.ready(onLocalized);
    $('#index #drawer form input').keyup(function() {
        var text = $.trim($(this).val());
        if (text) {
            $('#index #drawer article ul li').hide();
            $("#index #drawer article ul li a p:first-child:contains('" + (text.toUpperCase()) + "')").closest('li').fadeIn();
        } else {
            $('#index #drawer article ul li').show();
        }
    });
    $('#index #drawer form button').click(function() {
        $('#index #drawer article ul li').show();
    });
});