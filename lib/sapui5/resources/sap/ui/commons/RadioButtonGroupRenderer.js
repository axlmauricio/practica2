/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.RadioButtonGroupRenderer");sap.ui.commons.RadioButtonGroupRenderer={};
sap.ui.commons.RadioButtonGroupRenderer.render=function(r,R){var a=r;if(!R.getVisible()||!R.aRBs){return}var C=R.getColumns();a.write("<DIV");a.writeControlData(R);a.addClass("sapUiRbG");if(C>1){if(C==R.aRBs.length){a.addClass("sapUiRbG1Row")}else{a.addClass("sapUiRbGTab");if(R.getWidth()&&R.getWidth()!=''){a.addClass("sapUiRbGTabFlex")}}}if(R.getWidth()&&R.getWidth()!=''){a.addStyle("width",R.getWidth())}if(R.getTooltip_AsString()){a.writeAttributeEscaped("title",R.getTooltip_AsString())}if(R.getEditable()){a.writeAttribute('tabindex','0')}else{a.writeAttribute('tabindex','-1')}a.writeAccessibilityState(R,{role:"radiogroup",invalid:R.getValueState()==sap.ui.core.ValueState.Error,disabled:!R.getEditable()});a.writeClasses();a.writeStyles();a.write(">");for(var c=0;c<C;c++){if(C>1&&C!=R.aRBs.length){a.write("<DIV");a.addClass("sapUiRbGCol");a.writeClasses();a.write(">")}for(var i=c;i<R.aRBs.length;i=i+C){a.renderControl(R.aRBs[i])}if(C>1&&C!=R.aRBs.length){a.write("</DIV>")}}if(C>1&&C!=R.aRBs.length){a.write('<DIV class="sapUiRbGDummy"> </DIV>')}a.write("</DIV>")};
