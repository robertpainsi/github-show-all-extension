'use strict';

chrome.contextMenus.create({
    'title': 'Load all',
    'documentUrlPatterns': [
        '*://github.com/*/pull/*',
        '*://github.com/*/pull/*/files',
    ],
    'contexts': ['page'],
    'onclick': () => {
        chrome.tabs.executeScript(null, {
            file: 'index.js',
        }, function() {
        });
    }
});
