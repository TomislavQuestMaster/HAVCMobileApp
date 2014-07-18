window.HAVCMobileApp = window.HAVCMobileApp || {};
window.HAVCMobileApp.data = window.HAVCMobileApp.data || {};


var localStore = new DevExpress.data.LocalStore({
    key: "ID",
    name: "Local",
    immediate: true
});

/*
var context = new DevExpress.data.ODataContext({
    url: "http://services.odata.org/V3/Northwind/Northwind.svc",
    errorHandler: function (error) {
        alert(error.message);
    },
    entities: {
        Products: {
            key: "ProductID",
            keyType: "Int32"
        }
    }
});
*/
var izvjestaji = [];

var popisKinoprikazivaca = [

    {
        id: 1,
        kinoprikazivac: "Kinematografi Dubrovnik"
    }
];

var popisKina = [

    {
        idVlasnika: 1,
        ime: "Dvorana Visia",
        program: ["filmA", "filmB"]
    },
    {
        idVlasnika: 1,
        ime: "Kino Sloboda",
        program: ["filmA", "filmC"]
    },
    {
        idVlasnika: 1,
        ime: "Ljetno kino Jadran",
        program: ["filmE", "filmB"]
    },
    {
        idVlasnika: 2,
        ime: "Cineplexx Osijek",
        program: ["filmE", "filmB"]
    }

];

$(function () {

    //var store = new DevExpress.data.DataSource(context.Products);

    var kinoPrikazivacDataSource = new DevExpress.data.DataSource(popisKinoprikazivaca);
    var kinoDataSource = new DevExpress.data.DataSource(popisKina);
    var izvjestajiDataSource = new DevExpress.data.DataSource(izvjestaji);

    function spremiKorisnickoIme(ime) {

        localStore.remove(0);
        localStore.insert({
            ID: 0,
            Name: ime
        });
    }

    function dohvatiKorisnickoIme() {

        var deferred = $.Deferred();

        localStore.load().done(function (data) {

            if (data[0] == null) {
                deferred.resolve('');
            }
            else {
                deferred.resolve(data[0].Name);
            }
        });

        return deferred.promise();
    }

    function spremiLozinku(lozinka) {

        localStore.remove(1);
        localStore.insert({
            ID: 1,
            Name: lozinka
        });
    }

    function dohvatiLozinku() {

        var deferred = $.Deferred();

        localStore.load().done(function (data) {

            if (data[1] == null) {
                deferred.resolve('');
            }
            else {
                deferred.resolve(data[1].Name);
            }
        });

        return deferred.promise();
    }

    function dohvatiKina(idVlasnika) {

        var deferred = $.Deferred();

        kinoDataSource.filter("idVlasnika", "=", idVlasnika);
        kinoDataSource.sort("ime");
        kinoDataSource.load().done(function (popisKina) {

            /*
            var imena = [];
            
            popisKina.forEach(function (kino) {
                imena.push(kino.ime);
            });
            */

            deferred.resolve(popisKina);
        });

        return deferred.promise();
    }

    function dohvatiProgram(imeKina) {


        var deferred = $.Deferred();

        kinoDataSource.filter("ime", "=", imeKina);
        kinoDataSource.load().done(function (popisKina) {

            if (popisKina.length != 0) {
                deferred.resolve(popisKina[0].program);
            }

            deferred.resolve([]);
        });

        return deferred.promise();
    }

    function zaprimiIzvjestaj(izvjestaj) {

        izvjestajiDataSource.store.insert(izvjestaj);
    }


    $.extend(HAVCMobileApp.data, {
        dohvatiKina: dohvatiKina,
        dohvatiProgram: dohvatiProgram,
        spremiKorisnickoIme: spremiKorisnickoIme,
        dohvatiKorisnickoIme: dohvatiKorisnickoIme,
        spremiLozinku: spremiLozinku,
        dohvatiLozinku: dohvatiLozinku,
        zaprimiIzvjestaj: zaprimiIzvjestaj
    });
})