HAVCMobileApp.home = function (params) {

    var kinoPrikazivac = ko.observable();
    var kino = ko.observable();
    var tipPrograma = ko.observable();

    var popisKina = ko.observableArray();
    var popisPrograma = ko.observableArray();

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
        Application3.data.dohvatiProgram(kino()).done(function (popis) {

            var popisFilmova = [];

            popis.forEach(function (film) {
                popisFilmova.push({ imeFilma: film });
            });

            popisPrograma(popisFilmova);
        });
    }

    var dohvatiPopisKina = function () {
        HAVCMobileApp.data.dohvatiKina(1).done(function (popis) {
            popisKina(popis);
        });
    }

    return {
        kinoPrikazivac: kinoPrikazivac,
        kino: kino,
        tipPrograma: tipPrograma,
        popisKina: popisKina,
        popisPrograma: popisPrograma,

        pocetakPrikazivanja: pocetakPrikazivanja,
        krajPrikazivanja: krajPrikazivanja,

        brojProdanih: brojProdanih,
        brojBesplatnih: brojBesplatnih,
        brojGledatelja: brojGledatelja,
        brojProjekcija: brojProjekcija,
        promet: promet,

        dohvatiProgram: dohvatiProgram,
        dohvatiPopisKina: dohvatiPopisKina,
        spremi: spremi
    };
};