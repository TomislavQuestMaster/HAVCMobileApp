HAVCMobileApp.OdabirModula = function (params) {

    var mojModuli = [
        {ime:'Unos izvještaja'},
        {ime:'Nepoznati modul'}
    ]

    var moduli = ko.observableArray(mojModuli);

    return {
        moduli:moduli
    };
};