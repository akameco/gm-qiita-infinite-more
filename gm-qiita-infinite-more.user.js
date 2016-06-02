// ==UserScript==
// @name        gm-qiita-infinite-more
// @namespace   gm-qiita-infinite-more
// @include     http://qiita.com/*
// @version     1
// @grant       none
// ==/UserScript==

/* global $ */

function infinitelyMore() {
	const btn = $('.more-button').get(0);

	if (!btn) {
		return;
	}

	const wHeight = window.innerHeight;
	const wScroll = window.pageYOffset || document.scrollTop;

	const btnOffset = $('.more-button').offset().top;
	if (wScroll > (btnOffset - wHeight)) {
		btn.click();
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('scroll', infinitelyMore);
	window.addEventListener('resize', infinitelyMore);
});
