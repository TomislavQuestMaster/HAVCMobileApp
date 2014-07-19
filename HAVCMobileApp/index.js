window.HAVCMobileApp = window.HAVCMobileApp || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    HAVCMobileApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: HAVCMobileApp,
        layoutSet: DevExpress.framework.html.layoutSets[HAVCMobileApp.config.layoutSet],
        navigation: HAVCMobileApp.config.navigation
    });
    HAVCMobileApp.app.router.register(":view/:id", { view: "Login", id: undefined });

    HAVCMobileApp.app.navigate();
});
