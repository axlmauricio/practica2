/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.BusyDialogRenderer");sap.m.BusyDialogRenderer={};
sap.m.BusyDialogRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapMBusyDialog sapMCommonDialog");if(jQuery.device.is.iphone){r.addClass("sapMDialogHidden")}r.writeClasses();r.write(">");if(!c._busyIndicator)c._busyIndicator=new sap.m.BusyIndicator(c.getId()+'busyInd',{customIcon:c.getCustomIcon(),customIconWidth:'44'+'px',customIconheight:'44'+'px',customIconRotationSpeed:c.getCustomIconRotationSpeed(),customIconDensityAware:c.getCustomIconDensityAware()}).addStyleClass('sapMBsyInd');if(c.getTitle()){r.write("<h1 class=\"sapMDialogTitle\">"+c.getTitle()+"</h1>")}if(jQuery.os.ios){r.renderControl(c.oLabel);r.renderControl(c._busyIndicator)}else{r.renderControl(c._busyIndicator);r.renderControl(c.oLabel)}if(c.getShowCancelButton()){r.write("<div class='sapMBusyDialogAction'>");if(!c._oButton){var b=(c.getCancelButtonText())?c.getCancelButtonText():sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("BUSYDIALOG_CANCELBUTTON_TEXT");;var B=(jQuery.os.ios)?sap.m.ButtonType.Unstyled:sap.m.ButtonType.Default;c._oButton=new sap.m.Button(c.getId()+'busyCancelBtn',{text:b,type:B,tap:function(){c.close()}}).addStyleClass("sapMDialogBtn")}r.renderControl(c._oButton);r.write("</div>")}r.write("</div>")};