HAVCMobileApp.home = function (params) {

    var kinoPrikazivac = ko.observable();
    var kino = ko.observable();
    var tipPrograma = ko.observable();

    var pocetakPrikazivanja = ko.observable();
    var krajPrikazivanja = ko.observable();

    var brojProdanih = ko.observable(0);
    var brojBesplatnih = ko.observable(0);
    var brojGledatelja = ko.observable(0);
    var brojprojekcija = ko.observable(0);
    var promet = ko.observable(0);

    var spremi = function () {
    }

    var dohvatiProgram = function () {
    }

    var dohvatiPopisKina = function () {

    }

    return {
        brojProdanih: brojProdanih,
        promet: promet,
        kinoPrikazivac: kinoPrikazivac,
        dohvatiProgram: dohvatiProgram,
        dohvatiPopisKina: dohvatiPopisKina,
        spremi: spremi
    };
};