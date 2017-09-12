/*
 * Main.js
 */

/**
 *
 * @returns {undefined}
 */
function init() {
    console.log("init");
    $("#lblMessageMain").html("");
    
    $("li").on("click", function() {
        var prix = $("#prix").val();
        var pourcent = $(this).html().substr(0,2);
        var reduction = prix * (pourcent / 100);
        var prixReduit = prix - reduction;
        var prixReduitFormate = new Number(prixReduit);
        prixReduitFormate = prixReduitFormate.toFixed(2);
        $("#lblMessageMain").html("Prix en caisse : " + prixReduitFormate + " €");
    });
} /// init


/**
 *
 */
$(document).on('pagecreate', init);
