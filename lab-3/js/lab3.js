/* querySelectorAll - selects all matching elements
   https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll */
var tabs = document.querySelectorAll('.tabs ul li[role="tab"]');
var panels = document.querySelectorAll('div[role="tabpanel"]');

function activateTab(index) {

	/* NodeList.forEach - loops over each tab and panel
	   https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach */
	tabs.forEach(function(tab) {
		/* removeAttribute - clears aria-selected from all tabs
		   https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute */
		tab.removeAttribute('aria-selected');
	});

	panels.forEach(function(panel) {
		/* classList.remove - hides all panels
		   https://developer.mozilla.org/en-US/docs/Web/API/Element/classList */
		panel.classList.remove('active');
	});

	/* setAttribute - marks the clicked tab as selected
	   https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute */
	tabs[index].setAttribute('aria-selected', 'true');

	/* classList.add - shows the matching panel
	   https://developer.mozilla.org/en-US/docs/Web/API/Element/classList */
	panels[index].classList.add('active');
}

tabs.forEach(function(tab, i) {

	/* querySelector - finds the anchor inside each tab
	   https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector */
	var link = tab.querySelector('a');

	/* addEventListener - listens for a click on the tab link
	   https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener */
	link.addEventListener('click', function(e) {

		/* preventDefault - stops the href from jumping the page
		   https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault */
		e.preventDefault();
		activateTab(i);
	});
});

/* Show the first tab on page load */
activateTab(0);