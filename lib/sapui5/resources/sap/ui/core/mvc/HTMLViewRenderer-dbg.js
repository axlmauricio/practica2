/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides default renderer for JSView
jQuery.sap.declare("sap.ui.core.mvc.HTMLViewRenderer");

/**
 * @class JSView renderer.
 * @static
 */
sap.ui.core.mvc.HTMLViewRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.core.mvc.HTMLViewRenderer.render = function(oRenderManager, oControl){
	// convenience variable
	var rm = oRenderManager;

	// write the HTML into the render manager
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapUiView");
	rm.addClass("sapUiHTMLView");
	rm.addStyle("width", oControl.getWidth());
	rm.addStyle("height", oControl.getHeight());
	rm.writeStyles();
	rm.writeClasses();
	rm.write(">");
	
	var sHTML = oControl._oTemplate.innerHTML;

	var content = oControl.getContent();
	var aDeferred = [];
	
	// helper method to render the controls
	var renderControl = function(oControl) {
		var sTemp = sap.ui.core.mvc.HTMLViewRenderer._getHTML(rm, oControl, sHTML);
		if (sTemp) {
			sHTML = sTemp;
		} else {
			aDeferred.push(oControl);
		}
	};

	if (content) {
		if (jQuery.isArray(content)) {
			// looks like an Array
			for (var i = 0; i < content.length; i++) {
				renderControl(content[i]);
			}

		} else if (content) {
			// should be a Control
			renderControl(content);
		}
	}

	rm.write(sHTML);
	
	// all controls that are not found in the template will be added at the end
	for (var i = 0; i < aDeferred.length; i++) {
		rm.renderControl(aDeferred[i]);
	}

	rm.write("</div>");
};


/**
 * Replaces the control placeholder in the given HTML template. Returns the new HTML template if the control was found in the template.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 * @param {string} sHTML the HTML to replace with the control HTML
 * @return {string} the replaced HTML. Empty string "" when the control ID was not found in the given HTML string.
 * @private
 */
sap.ui.core.mvc.HTMLViewRenderer._getHTML = function (oRenderManager, oControl, sHTML) {
	var sId = oControl.getId();
	// First add new lines before any div, so that we can use an easy regexp
	sHTML = sHTML.replace(/(<div)/gi, "\n$1");
	// Simple replace the placeholder with control html
	var regExp = new RegExp('<div.*?data-sap-ui-id="' + sId + '".*?></div>', "gi");
	var aMatches = regExp.exec(sHTML);
	if (aMatches) {
		sHTML = sHTML.replace(aMatches[0], oRenderManager.getHTML(oControl));
		return sHTML;
	} else {
		return "";
	}
};