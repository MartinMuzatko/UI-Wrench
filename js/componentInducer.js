/* ===============================
 * COMPONENT INDUCER
 * Is supposed to give HTML the control to setup components by 
 * looking at the data-component value.
 *
 */

!use strict

var seekers = document.querySelectorAll('[data-component]')
for (var seeker in seekers)
{
	var settings = seeker.dataset
	// settings.component
	// settings.hasOwnProperty('')

}

// --------------------------------
// Components available
