var list_language;
function onLocalized() {
    var l10n = document.webL10n;
    list_language = document.querySelectorAll('main#main menu div.list div.item');
    var total_language = list_language.length;
    for (var i = 0; i < total_language; i++) {
        list_language.item(i).onclick = function() {
            var language = $(this).data('l10n');
            l10n.setLanguage(language);
            $('main#main section header.bar-header button').click();
        };
    }
}
$(document).ready(function() {
    document.webL10n.ready(onLocalized);
    $('main#main section header.bar-subheader div.bar-header button').click(function() {
        var text = $.trim( $('main#main section header.bar-subheader div.bar-header input').val());
        if (text) {
            $('main#main section article ul li').hide();
            $("main#main section article ul li h2:contains('" + (text.toUpperCase()) + "')").closest('li').fadeIn();
        } else {
            $('main#main section article ul li').show();
        }
    });
    $('main#main section header.bar-header button').click(function() {
        $('main#main').toggleClass('show_menu');
    });
});