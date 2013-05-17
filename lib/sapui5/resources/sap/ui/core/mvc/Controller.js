/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.mvc.Controller");jQuery.sap.require("sap.ui.base.EventProvider");(function(){var r={};sap.ui.base.EventProvider.extend("sap.ui.core.mvc.Controller",{constructor:function(n){var t=null;if(typeof(n)=="string"){if(!r[n]){jQuery.sap.require({modName:n,type:"controller"});if(!r[n]){throw new Error("Controller type "+n+" is undefined.")}}t=r[n]}sap.ui.base.EventProvider.apply(this,arguments);if(t){jQuery.extend(this,r[n])}}});sap.ui.controller=function(n,c){if(!n){throw new Error("Controller name ('sName' parameter) is required")}if(!c){if(!r[n]&&!jQuery.sap.getObject(n)){jQuery.sap.require({modName:n,type:"controller"})}if(r[n]){return new sap.ui.core.mvc.Controller(n)}else{var C=jQuery.sap.getObject(n);if(typeof C==="function"&&C.prototype instanceof sap.ui.core.mvc.Controller){return new C()}}throw new Error("Controller "+n+" couldn't be instantiated")}else{r[n]=c}};sap.ui.core.mvc.Controller.prototype.getView=function(){return this.oView};sap.ui.core.mvc.Controller.prototype.byId=function(i){return this.oView?this.oView.byId(i):undefined};sap.ui.core.mvc.Controller.prototype.createId=function(i){return this.oView?this.oView.createId(i):undefined};sap.ui.core.mvc.Controller.prototype.connectToView=function(v){this.oView=v;if(this.onInit){v.attachAfterInit(this.onInit,this)}if(this.onExit){v.attachBeforeExit(this.onExit,this)}if(this.onAfterRendering){v.attachAfterRendering(this.onAfterRendering,this)}if(this.onBeforeRendering){v.attachBeforeRendering(this.onBeforeRendering,this)}}}());