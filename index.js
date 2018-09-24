'use strict';

document.querySelectorAll('.load-diff-button')
    .forEach((b) => b.click());
document.querySelectorAll('details:not([open]).outdated-comment')
    .forEach((e) => e.querySelectorAll('.show-outdated-button').forEach((b) => b.click()));
