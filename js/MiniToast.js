/*
 * MiniToast.js
 */
/*
 *
 * @param {type} asMessage
 * @param {type} aiDuree
 * @param {type} asCouleurFond
 * @returns {undefined}
 */
function toast(asMessage, asDuree, asCouleurFond) {
    /*
     * Duree ("short" ou "long")
     * Couleur en String ("rouge" ou "vert" ou "gris")
     */
    console.log("toast");
    $("#divMiniToast").html(asMessage);
    //$("#divMiniToast").css("top", "100px");
    var largeurEcran = $(window).width();
    var hauteurEcran = $(window).height();
    var largeurPopup = $("#divMiniToast").width();
    var hauteurPopup = $("#divMiniToast").height();
    var gauche = (largeurEcran / 2) - (largeurPopup / 2);
    var haut = (hauteurEcran / 2) - (hauteurPopup / 2);
    console.log("largeurEcran : " + largeurEcran);
    console.log("hauteurEcran : " + hauteurEcran);
    console.log("largeurPopup : " + largeurPopup);
    console.log("hauteurPopup : " + hauteurPopup);
    console.log("gauche : " + gauche);
    console.log("haut : " + haut);
    gauche = 100;
    $("#divMiniToast").css("display", "block");
    $("#divMiniToast").css({position: 'fixed', top: haut, left: gauche});

    /*
     * La couleur du fond
     */
    if (asCouleurFond === "vert") {
        $("#divMiniToast").css("backgroundColor", "green");
    }
    if (asCouleurFond === "rouge") {
        $("#divMiniToast").css("backgroundColor", "red");
    }
    if (asCouleurFond === "gris") {
        $("#divMiniToast").css("backgroundColor", "dimgray");
    }

    /*
     * On masque dans N secondes
     */
    var milliSecondes = 0;
    if (asDuree === "short") {
        milliSecondes = 2000;
    }
    if (asDuree === "long") {
        milliSecondes = 5000;
    }
    setTimeout(masquerToast, milliSecondes);
} /// afficherToast

/**
 *
 * @returns {undefined}
 */
function masquerToast() {
    console.log("masquerToast");
    $("#divMiniToast").css("display", "none");
} /// masquerToast
