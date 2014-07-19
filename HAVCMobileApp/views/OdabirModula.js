HAVCMobileApp.OdabirModula = function (params) {

    var mojModuli = [
        {ime:'modul1'},
        {ime:'modil2'}
    ]

    var moduli = ko.observableArray(mojModuli);

    return {
        moduli:moduli
    };
};