sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"mckesson/eu/my-webapp/model/formatter"
], function (Controller, MessageToast, Filter, FilterOperator, formatter) {
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

		},

		onFilterProducts :function(oEvent) {
			// Build filter array
			var aFilter = [],
				sQuery = oEvent.getParameter("query"),
				// retrieve the list cntrol
				oList = this.getView().byId("invoiceList"),
				// get binding for aggregation items
				oBinding = oList.getBinding("items");

			if(sQuery){
				aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
			}		
				// apply filter
				oBinding.filter(aFilter);
			
		}
	});

});
