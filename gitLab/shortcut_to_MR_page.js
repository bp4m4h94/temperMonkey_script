// ==UserScript==
// @name         GitLab 快速移動至Merge Request -> Review Request Page
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       Ryan Tsai
// @match        https://gitlab.kazan.myworldline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=myworldline.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown', function(event) {
    // Check if 'Ctrl' and 'M' key are pressed together
    if (event.ctrlKey && (event.key === 'm' || event.key === 'M')) {
        // Prevent default action to avoid triggering any other command associated with the key combo
        event.preventDefault();

        // Change the location of the current page to the target URL
        window.location.href = "/dashboard/merge_requests?reviewer_username=W127459";
    }
});
})();