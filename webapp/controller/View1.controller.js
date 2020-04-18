sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("NOVEL.THECOVID19.controller.View1", {
		onInit: function () {
			debugger;
			var mod = this.getView().getModel().getData();
			var TMPOBJ = [{
				"text": "Kerala",
				"value": "",
				"nodes": [{
					"text": "Thrissur",
					"value": ""
				}, {
					"text": "Alappuzha",
					"value": ""
				}]
			}, {
				"text": "Maharashtra",
				"value": "",
				"nodes": [{
					"text": "Pune",
					"value": ""
				}, {
					"text": "Mumbai",
					"value": ""
				}, {
					"text": "Nagpur",
					"value": ""
				}, {
					"text": "Ahmadnagar",
					"value": ""
				}, {
					"text": "Thane",
					"value": ""
				}, {
					"text": "Raigarh",
					"value": ""
				}, {
					"text": "Yavatmal",
					"value": ""
				}, {
					"text": "Aurangabad",
					"value": ""
				}, {
					"text": "Ratnagiri",
					"value": ""
				}, {
					"text": "Palghar",
					"value": ""
				}, {
					"text": "Sangli",
					"value": ""
				}, {
					"text": "Satara",
					"value": ""
				}, {
					"text": "Sindhudurg",
					"value": ""
				}, {
					"text": "Gondiya",
					"value": ""
				}, {
					"text": "Kolhapur",
					"value": ""
				}, {
					"text": "Other states",
					"value": ""
				}, {
					"text": "Jalgaon",
					"value": ""
				}, {
					"text": "Buldhana",
					"value": ""
				}, {
					"text": "Nashik",
					"value": ""
				}, {
					"text": "Osmanabad",
					"value": ""
				}, {
					"text": "Washim",
					"value": ""
				}, {
					"text": "Hingoli",
					"value": ""
				}, {
					"text": "Amravati",
					"value": ""
				}, {
					"text": "Latur",
					"value": ""
				}, {
					"text": "Jalna",
					"value": ""
				}, {
					"text": "Akola",
					"value": ""
				}, {
					"text": "Beed",
					"value": ""
				}, {
					"text": "Dhule",
					"value": ""
				}, {
					"text": "Solapur",
					"value": ""
				}]
			}];
			// var obj = { };
			// obj = TMPOBJ;
			// TMPOBJ[0].value = 2;
			// TMPOBJ[1].value = 10;

			let MHdist = ["Pune", "Mumbai", "Nagpur", "Ahmadnagar", "Thane", "Raigarh", "Yavatmal", "Aurangabad", "Ratnagiri", "Palghar",
				"Sangli", "Satara", "Sindhudurg",
				"Gondiya", "Kolhapur", "Other States*", "Jalgaon", "Buldana", "Nashik", "Osmanabad", "Washim", "Hingoli", "Amravati", "Latur",
				"Jalna", "Akola",
				"Bid", "Dhule", "Solapur"
			];

			var jsonModel = new sap.ui.model.json.JSONModel();
			jsonModel.setData(TMPOBJ);
			
			//statewise Count 
		   let stateModel = this.getView().getModel("stateModel");
		   // Total Confirmed Cases in Maharastra
		  TMPOBJ[1].value = stateModel.getData().statewise[1].confirmed
		  
		  // Loop for All District wise data in Maharashtra
			for (var i = 0; i <= 28; i++) {

				TMPOBJ[1].nodes[i].value = mod.Maharashtra.districtData[MHdist[i]].confirmed;
			}

			this.getView().setModel(jsonModel);
		}
	});
});