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
document.webL10n.ready(onLocalized);
setTimeout(function() {
    list_language.item(0).click();
}, 500);
