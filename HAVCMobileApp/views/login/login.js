HAVCMobileApp.login = function (params) {

    var korisnickoIme = ko.observable();
    HAVCMobileApp.data.dohvatiKorisnickoIme().done(function (ime) {
        korisnickoIme(ime);
    });
    var spremiKorisnickoIme = function (item) {
        HAVCMobileApp.data.spremiKorisnickoIme(item.value);
    }

    var lozinka = ko.observable();
    HAVCMobileApp.data.dohvatiLozinku().done(function (pass) {
        lozinka(pass);
    });
    var spremiLozinku = function (item) {
        HAVCMobileApp.data.spremiLozinku(item.value);
    }

    var prijava = function () {
        
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/login",
            contentType: "application/json",
            data: JSON.stringify({
                korisnik: korisnickoIme(),
                lozinka: lozinka()
                }),
            crossDomain: true,
            success: uspjesnaPrijava,
            error: neuspjesnaPrijava,
            dataType: "json"
        });
    }

    var upozorenjeVidljivo = ko.observable(false);

    var uspjesnaPrijava = function () {
        HAVCMobileApp.app.navigate("home");
    }

    var neuspjesnaPrijava = function () {
        upozorenjeVidljivo(true);
    }  

    return {
        korisnickoIme: korisnickoIme,
        spremiKorisnickoIme: spremiKorisnickoIme,
        lozinka: lozinka,
        spremiLozinku: spremiLozinku,
        prijava: uspjesnaPrijava,
        upozorenjeVidljivo: upozorenjeVidljivo
    };
};