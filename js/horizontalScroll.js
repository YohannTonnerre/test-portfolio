const creation = document.querySelector('.creation-page-container');


window.addEventListener('scroll', ()=> {
	var scroll = window.pageYOffset;
	creation.style.transform = "translateX(" + -scroll + "px)"; 
})