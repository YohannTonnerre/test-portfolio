const loading = document.querySelector('.loading');

const titleSpan1 = document.querySelector('.span-title1');
const titleSpan2 = document.querySelector('.span-title2');
const underline = document.querySelector('.underline');

const btn = document.querySelector('.from-top');

const chouette = document.querySelector('.chouette');
const devWeb = document.querySelector('.dev-web');

const container = document.querySelector('.first-view');

const burger = document.querySelector('.burger-container');
const burgerActive = document.querySelector('.burger-container.active');
const menuContent = document.querySelector('.menu-content');
const logo = document.querySelector('.logo');


burger.addEventListener('click', ()=>{
	menuContent.classList.toggle('active');
	burger.classList.toggle('active');
})




function start(){
	loading.style.animation = "loading 1s ease 1s forwards";
	underline.style.animation = "underline 1.2s ease 1s";
}

loading.addEventListener("animationend", () => {
	titleSpan1.style.animation = "down .5s ease .2s forwards";
	titleSpan2.style.animation = "down .5s ease .4s forwards";
	loading.style.display = "none";
})


titleSpan2.addEventListener("animationend", () => {
	btn.style.animation = "pop 2s ease forwards";
	titleSpan2.style.display = "none";
	titleSpan1.style.display = "none";
	container.style.flexDirection = "column";
})



btn.addEventListener("animationend", () => {
	chouette.style.display = "inline";
	devWeb.style.display = "inline";
	chouette.style.animation = "goesDown .8s ease forwards";
	devWeb.style.animation = "goesDown .8s ease forwards .2s";

	logo.style.animation = "downed .8s ease forwards .2s";
	burger.style.animation = "downed .8s ease forwards .2s";
	menuContent.style.opacity = 1;
})




window.addEventListener("scroll", ()=>{
	var scroll = window.pageYOffset;
	console.log(scroll);
	btn.style.opacity = 1 + -scroll / 250 ;
	chouette.style.opacity = 1 + -scroll / 250 ;
	devWeb.style.opacity = 1 + -scroll / 250 ;
	chouette.style.marginLeft =  + scroll  + "px"; 
	devWeb.style.marginRight =  + scroll  + "px"; 
})

window.onload = start();