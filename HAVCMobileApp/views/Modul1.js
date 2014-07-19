HAVCMobileApp.Modul1 = function (params) {

   var currrentUser = {
       photo:"img.png",
       logout: function () { },
       name: "Ivan",
       surname: "ja",
       email: "@nesto",
       notifications: {
           packageShip: true,
           packageArrive: true,
           weekDeals: true,
           partnerDeals:true
       },
       billingAddress: {
           "Country": "country",
           "Postcode": "zipCode",
           "State": "state",
           "City": "city",
           "Address": "address",
           "Phone": "phoneNumber"
       }

   };     

    var viewModel = {
        user: currrentUser
    };

    return viewModel;
};