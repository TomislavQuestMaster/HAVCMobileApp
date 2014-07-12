window.HAVCMobileApp = window.HAVCMobileApp || {};
window.HAVCMobileApp.data = window.HAVCMobileApp.data || {};

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


    $.extend(HAVCMobileApp.data, {
        dohvatiKina: dohvatiKina,
        dohvatiProgram: dohvatiProgram
    });
})