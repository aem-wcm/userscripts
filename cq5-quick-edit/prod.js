// ==UserScript==
// @name         PROD CQ5 Quick Edit
// @namespace    CQ5
// @include      http*://www.chevroletjapan.com/*
// @include      http*://www.chevrolet.co.th/*
// @include      http*://en.chevrolet.co.th/*
// @include      http*://www.chevrolet.co.id/*
// @include      http*://www.chevrolet.co.in/*
// @include      http*://m.chevroletjapan.com/*
// @include      http*://m.chevrolet.co.th/*
// @include      http*://m.en.chevrolet.co.th/*
// @include      http*://m.chevrolet.co.id/*
// @include      http*://m.chevrolet.co.in/*
// @grant        none
// @version      20.01.08
// @author       aem-wcm
// @updateURL    
// @downloadURL 
// ==/UserScript==

/*
============================================================
	1: Create URL
============================================================
*/
var host =         window.location.hostname;
var pathname =     window.location.pathname;
var seg13Root =    "https://auth-seg13-prd1.gm.com/cf#/content/chevrolet/asia";
var seg14Root =    "https://auth-seg14-prd1.gm.com/cf#/content/chevrolet/asia";
var jpBBroot =     "/japan/nscwebsite/ja";
var jpMBroot =     "/japan/mobilesite/ja/home";
var ththBBroot =   "/thailand/nscwebsite/th";
var ththMBroot =   "/thailand/mobilesite/th_TH/home";
var ttenBBroot =   "/thailand/nscwebsite/en";
var ttenMBroot =   "/thailand/mobilesite/en_TH/home";
var idBBroot =     "/indonesia/nscwebsite/in_ID";
var idMBroot =     "/indonesia/mobilesite/in_ID/home";
var inBBroot =     "/india/nscwebsite/en_IN";
var inMBroot =     "/india/mobilesite/en_IN/home";
var countryRoot =  "";
var cq5Url =       "";

if (pathname.length <= 1) {
		pathname = "/index.html";
}

if (window.location.hostname[0] != "m") {

	// BB
	if (pathname.localeCompare("/index.html") != 0) {
		pathname = "/index" + pathname;
	}

	if (host.localeCompare("www.chevroletjapan.com") == 0) {
		countryRoot = jpBBroot;
	} else if (host.localeCompare("www.chevrolet.co.th") == 0) {
		countryRoot = ththBBroot;
	} else if (host.localeCompare("en.chevrolet.co.th") == 0) {
		countryRoot = ttenBBroot;
	} else if (host.localeCompare("www.chevrolet.co.id") == 0) {
		countryRoot = idBBroot;
	} else if (host.localeCompare("www.chevrolet.co.in") == 0) {
		countryRoot = inBBroot;
	} else {
		countryRoot = "ERROR";
	}

	cq5Url = seg13Root + countryRoot + pathname;

} else {


	// MB
	if (host.localeCompare("m.chevroletjapan.com") == 0) {
		countryRoot = jpMBroot;
	} else if (host.localeCompare("m.chevrolet.co.th") == 0) {
		countryRoot = ththMBroot;
	} else if (host.localeCompare("m.en.chevrolet.co.th") == 0) {
		countryRoot = ttenMBroot;
	} else if (host.localeCompare("m.chevrolet.co.id") == 0) {
		countryRoot = idMBroot;
	} else if (host.localeCompare("m.chevrolet.co.in") == 0) {
		countryRoot = inMBroot;
	} else {
		countryRoot = "ERROR";
	}

	cq5Url = seg14Root + countryRoot + pathname;



}



/*
============================================================
	2: Create Container Element
============================================================
*/
var divElement = document.createElement("div");

// Attributes
var divStyle = "";
var size = "20px;";
divStyle += "width: " + size;
divStyle += "height: " + size;
divStyle += "border-radius: 50%;";
divStyle += "background: #FFF;";
divStyle += "position: fixed;";
divStyle += "bottom: 25px;";
divStyle += "left: 25px;";
divStyle += "cursor: pointer;";
divStyle += "box-shadow: 0px 0px 3px #666;";
divStyle += "z-index: 100;";
//divStyle += "opacity: 0.3";

// Decorations
divElement.setAttribute("id", "floating");
divElement.setAttribute("style", divStyle);
//divElement.setAttribute("onmouseover", "this.style.opacity = '1.0'");
//divElement.setAttribute("onmouseout", "this.style.opacity = '0.3'");

/*
============================================================
	3: Create Link Element
============================================================
*/
var aElement = document.createElement("a");

// Attributes
var aStyle = "";
aStyle += "display: block;";
aStyle += "width: " + size;
aStyle += "height: " + size;

// Decorations
aElement.setAttribute("href", cq5Url);
aElement.setAttribute("target", "_blank");
aElement.setAttribute("style", aStyle);

/*
============================================================
	Finalize
============================================================
*/
divElement.appendChild(aElement);
document.getElementsByTagName('body')[0].appendChild(divElement);