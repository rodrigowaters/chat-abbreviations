var select;
function onLocalized() {
    var l10n = document.webL10n;
    select = document.getElementsByTagName('select')[0];
    select.onchange = function() {
        l10n.setLanguage(this.value || this.options[this.selectedIndex].text);
    };
}
document.webL10n.ready(onLocalized);
setTimeout(function(){
        select.onchange();
},500);