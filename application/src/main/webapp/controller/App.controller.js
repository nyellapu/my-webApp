sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"mckesson/eu/my-webapp/model/formatter"
], function (Controller, MessageToast, formatter) {
	"use strict";

    return Controller.extend("mckesson.eu.my-webapp.controller.App", {

		formatter : formatter,
		onShowHello : function () {
			// show a native JavaScript alert
			//MessageToast.show("Hello openSAP");
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);

		}
	});

});
