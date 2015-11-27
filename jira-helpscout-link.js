// ==UserScript==
// @name         JIRA Helpscout link
// @namespace    neeme.praks.net
// @homepage     https://github.com/nemecec/jira-helpscout-link
// @version      1.0
// @description  Turn HelpScout case numbers into links
// @author       Neeme Praks
// @include      https://your.jira.host/browse/*
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';
    var helpScoutUrlBase = "https://secure.helpscout.net/conversation/";

    var customFields = document.getElementById("customfieldmodule");
    var helpScoutFieldNames = customFields.querySelectorAll('[title="Help Scout ID"]');
    Array.prototype.forEach.call(helpScoutFieldNames, function(fieldName) {
        //console.log("helpscout field name: " + fieldName);
        var fieldValueElement = fieldName.parentElement.getElementsByClassName("value")[0];
        var fieldValue = fieldValueElement.textContent;
        //console.log("helpscout field: " + fieldValue);
        var values = fieldValue.replace(/^\s\s*/, '').replace(/\s\s*$/, '').split(/[\s]+/);
        console.log("helpscout field values: " + values.join());
        fieldValueElement.removeChild(fieldValueElement.childNodes[0]);
        var resultElement = fieldValueElement;
        Array.prototype.forEach.call(values, function(value) {
            console.log("helpscout field value: " + value);
            var linkElement = document.createElement("A");
            var linkHref = document.createAttribute("href")
            linkHref.value = helpScoutUrlBase + value;
            linkElement.setAttributeNode(linkHref);
            var linkText = document.createTextNode(value);
            linkElement.appendChild(linkText);
            resultElement.appendChild(linkElement);
            var spaceBetween = document.createTextNode(" ");
            resultElement.appendChild(spaceBetween);
        });
    });

}());
