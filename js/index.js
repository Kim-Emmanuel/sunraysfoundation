const currentPath = window.location.pathname;

const navLinks = document.querySelectorAll('.nav.navbar-nav .nav-item .nav-link'); // Select all nav-links

navLinks.forEach(link => {
    let href = link.getAttribute('href');
    // For sub-menu items, check if the current path *starts with* the link's href
    if (
        href === currentPath || 
        (currentPath !== '/' && currentPath.startsWith(href) && href !== '#') // For submenus
    ) {
        link.classList.add('active');

        // Add 'active' class to parent <li> for dropdown styling 
        let parentLi = link.closest('.nav-item'); 
        if (parentLi) {
            parentLi.classList.add('active');
        }



		let parentDropdown = link.closest('.submenu.dropdown');
		if (parentDropdown) {
			// Find the main dropdown toggle link
			let dropdownToggle = parentDropdown.querySelector('.nav-link.dropdown-toggle');
			if (dropdownToggle) {
				dropdownToggle.classList.add('active'); // Make the main link active
				dropdownToggle.setAttribute('aria-expanded', 'true'); // Keeps the dropdown open
			}
			parentDropdown.classList.add('show'); // Make the dropdown visible


		}


    }



});