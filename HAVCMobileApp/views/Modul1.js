HAVCMobileApp.Modul1 = function (params) {

    var kinoPrikazivac = ko.observable();
    var kino = ko.observable();
    var tipPrograma = ko.observable();

    var popisKina = ko.observableArray();
    var popisPrograma = ko.observableArray();

    var pocetakPrikazivanja = ko.observable(new Date());
    var krajPrikazivanja = ko.observable(new Date());

    var brojProdanih = ko.observable(0);
    var brojBesplatnih = ko.observable(0);
    var brojGledatelja = ko.observable(0);
    var brojProjekcija = ko.observable(0);
    var promet = ko.observable(0);

    var posaljiIzvjestaj = function () {

        HAVCMobileApp.data.zaprimiIzvjestaj({
            kinoPrikazivac: kinoPrikazivac,
            kino: kino,
            tipPrograma: tipPrograma,
            pocetakPrikazivanja: pocetakPrikazivanja,
            krajPrikazivanja: krajPrikazivanja,
            brojProdanih: brojProdanih,
            brojBesplatnih: brojBesplatnih,
            brojGledatelja: brojGledatelja,
            brojProjekcija: brojProjekcija,
            promet: promet
        });
        HAVCMobileApp.app.navigate("OdabirModula");

    }

    var dohvatiProgram = function () {

        HAVCMobileApp.data.dohvatiProgram(kino()).done(function (popis) {

            /*
            var popisFilmova = [];

            popis.forEach(function (film) {
                popisFilmova.push({ imeFilma: film });
            });
            */

            popisPrograma(popis);
        });
    }

    kino("Dvorana Visia");
    dohvatiProgram();

    var dohvatiPopisKina = function () {
        HAVCMobileApp.data.dohvatiKina(1).done(function (popis) {

            var svaKina = [];

            popis.forEach(function (kino) {
                svaKina.push(kino.ime);
            });

            popisKina(svaKina);
        });
    }

    dohvatiPopisKina();

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
        posaljiIzvjestaj: posaljiIzvjestaj
    };
};