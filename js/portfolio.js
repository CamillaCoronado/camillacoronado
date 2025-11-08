/* Popup */
function myFunction() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
}

/* Tabs on my work page */
function openProject(evt, projName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(projName).style.display = "inline-block";
    evt.currentTarget.className += " active";
}

function createStars() {
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars-container';
  
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    
    starsContainer.appendChild(star);
  }
  
  document.body.appendChild(starsContainer);
}

function setActiveWedge(section) {
  document.querySelectorAll('.nav-wedge').forEach(wedge => {
    wedge.classList.remove('active');
  });
  
  if (section === 'home') {
    document.querySelector('.nav-home-wedge').classList.add('active');
  } else if (section === 'about') {
    document.querySelector('.nav-about-wedge').classList.add('active');
  } else if (section === 'work') {
    document.querySelector('.nav-work-wedge').classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
	createStars();
	
	const homeSection = document.querySelector('.right-section.home');
	const aboutSection = document.querySelector('.right-section.about');
	const workSection = document.querySelector('.right-section.work');
	const sun = document.querySelector('.sun');
	const cloud = document.querySelector('.cloud-container');
	const heroText = document.querySelector('.hero-text');
    const h2Home = document.querySelector('h2.home');

	const homeWedge = document.querySelector('.nav-home-wedge');
	const aboutWedge = document.querySelector('.nav-about-wedge');
	const workWedge = document.querySelector('.nav-work-wedge');
	
	if (homeWedge) {
		homeWedge.addEventListener('click', () => {
			document.querySelector('.label-home').click();
		});
	}
	
	if (aboutWedge) {
		aboutWedge.addEventListener('click', () => {
			document.querySelector('.label-about').click();
		});
	}
	
	if (workWedge) {
		workWedge.addEventListener('click', () => {
			document.querySelector('.label-work').click();
		});
	}
	
	// get all nav links
	const homeLinks = document.querySelectorAll('.nav-label.label-home, .mobile-nav a:nth-child(1)');
	const aboutLinks = document.querySelectorAll('.nav-label.label-about, .mobile-nav a:nth-child(2)');
	const workLinks = document.querySelectorAll('.nav-label.label-work, .mobile-nav a:nth-child(3)');
	
	function showHome(e) {
		if (e) e.preventDefault();
		
		homeSection.style.display = 'flex';
		aboutSection.style.display = 'none';
		workSection.style.display = 'none';
		sun.style.display = 'block';
		cloud.style.display = 'none';
		
		const stars = document.querySelector('.stars-container');
		const moon = document.querySelector('.moon');
		if (stars) stars.style.display = 'none';
		if (moon) moon.style.display = 'none';
		
		heroText.innerHTML = `
			<h1>Hi there.</h1>
			<h1>I'm Camilla</h1>
		`;
		h2Home.style.display = 'flex';
		
		document.querySelector('.home-bg').style.opacity = '1';
        setTimeout(() => {
            document.querySelector('.about-bg').style.opacity = '0';
            document.querySelector('.work-bg').style.opacity = '0';
        }, 50);
		document.getElementById('menu-toggle').checked = false;
        setActiveWedge('home');
	}
	
	function showAbout(e) {
		if (e) e.preventDefault();
		
		homeSection.style.display = 'none';
		aboutSection.style.display = 'flex';
		workSection.style.display = 'none';
		sun.style.display = 'none';
		cloud.style.display = 'block';
		
		const stars = document.querySelector('.stars-container');
		const moon = document.querySelector('.moon');
		if (stars) stars.style.display = 'none';
		if (moon) moon.style.display = 'none';
		
		heroText.innerHTML = `<h1>About</h1>`;
		h2Home.style.display = 'none';
		
        document.querySelector('.about-bg').style.opacity = '1';
        setTimeout(() => {
            document.querySelector('.home-bg').style.opacity = '0';
            document.querySelector('.work-bg').style.opacity = '0';
        }, 50);
		document.getElementById('menu-toggle').checked = false;
        setActiveWedge('about');
	}
	
	function showWork(e) {
		if (e) e.preventDefault();
		
		homeSection.style.display = 'none';
		aboutSection.style.display = 'none';
		workSection.style.display = 'flex';
		sun.style.display = 'none';
		cloud.style.display = 'none';
		
		const stars = document.querySelector('.stars-container');
		const moon = document.querySelector('.moon');
		if (stars) stars.style.display = 'block';
		if (moon) moon.style.display = 'block';
		
		heroText.innerHTML = `<h1>My Work</h1>`;
		h2Home.style.display = 'none';
		
		document.querySelector('.work-bg').style.opacity = '1';
        setTimeout(() => {
            document.querySelector('.home-bg').style.opacity = '0';
            document.querySelector('.about-bg').style.opacity = '0';
        }, 50);
		document.getElementById('menu-toggle').checked = false;
		
		// click default tab if it exists
		const defaultTab = document.getElementById("defaultOpen");
		if (defaultTab) defaultTab.click();
        setActiveWedge('work');
	}
	
	// attach click handlers
	homeLinks.forEach(link => link.addEventListener('click', (e) => showHome(e)));
	aboutLinks.forEach(link => link.addEventListener('click', (e) => showAbout(e)));
	workLinks.forEach(link => link.addEventListener('click', (e) => showWork(e)));
	
	// nav label hover effects (only for desktop nav wheel)
	document.querySelectorAll('.nav-label').forEach(label => {
		label.addEventListener('mouseenter', function() {
			const section = document.querySelector('.section-' + this.classList[1]);
			if (section) section.style.opacity = '1';
		});
		label.addEventListener('mouseleave', function() {
			const section = document.querySelector('.section-' + this.classList[1]);
			if (section) section.style.opacity = '0';
		});
	});
	
	// default state
	showHome();
    document.querySelector('.sun').classList.add('risen');
});