// ADD BLUR TO HEADER
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header")
})

// SCROLL SECTIONS ACTIVE LINK
document.addEventListener("DOMContentLoaded", function() {
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll(".navbar-item")

	function changeLinkState() {
		let index = sections.length;

		while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

		navLinks.forEach((link) => link.classList.remove("active"));
		navLinks[index].classList.add("active");
	}

	changeLinkState();
	window.addEventListener("scroll", changeLinkState);
});