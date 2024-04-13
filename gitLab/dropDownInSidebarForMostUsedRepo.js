// ==UserScript==
// @name         GitLab Custom Sidebar Dropdown
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Append a dropdown of repositories to the GitLab sidebar
// @author       Ryan Tsai
// @match        https://gitlab.kazan.myworldline.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of repositories to include in the dropdown
    const repositories = [
        {name: 'ctbc-wlps-abo', url: '/ctbc-wlps/ctbc-wlps-abo'},
        {name: 'ctbc-wlps-gui', url: '/ctbc-wlps/ctbc-wlps-gui'},
        {name: 'ctbc-extras-abo', url: '/ctbc-wlps/ctbc-extras-abo'},
        {name: 'ctbc-extras-gui', url: '/ctbc-wlps/ctbc-extras-gui'},
        {name: 'ctbc-wlps-cc', url: '/ctbc-wlps/ctbc-wlps-cc'},
        {name: 'optimus-abo', url: '/apac-e2e-optimus/optimus-abo'},
        {name: 'optimus-gui-v2', url: '/apac-e2e-optimus/optimus-gui-v2'}
    ];

    // Wait for the sidebar to load
    const intervalId = setInterval(function () {
        const sidebarList = document.querySelector('[data-testid="non-static-items-section"]');
        if (sidebarList) {
            clearInterval(intervalId);
            // Create the select element
            const select = document.createElement('select');
            select.className = 'gl-form-input gl-mb-3';
            select.style.width = '100%';
            select.innerHTML = `<option value="">Select most used repository...</option>`;
            repositories.forEach(repo => {
                const option = document.createElement('option');
                option.value = repo.url;
                option.textContent = repo.name;
                select.appendChild(option);
            });

            // Go to the repository when selected
            select.addEventListener('change', function () {
                if (select.value) {
                    window.location.href = select.value;
                }
            });

            // Create a wrapper for the select dropdown
            const listItem = document.createElement('li');
            listItem.className = 'gl-relative gl-mb-3';
            listItem.appendChild(select);

            // Append the select dropdown to the sidebar
            sidebarList.appendChild(listItem);
        }
    }, 500);

})();