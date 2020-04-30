const html = document.querySelector('html');

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


const competence = document.querySelector('.competence');

const skill1 = document.querySelector('.skill-box1');
const skill2 = document.querySelector('.skill-box2');
const skill3 = document.querySelector('.skill-box3');




burger.addEventListener('click', ()=>{
	menuContent.classList.toggle('active');
	burger.classList.toggle('active');
	html.classList.toggle('no-scroll');
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
	chouette.style.marginLeft =  + scroll / 2  + "px"; 
	devWeb.style.marginRight =  + scroll / 2  + "px"; 


	if(scroll >= 100){
		competence.classList.add('active');
	}
	else{
		competence.classList.remove('active');
	}

	if(scroll >= 400){
		skill1.classList.add('active');
		skill2.classList.add('active');
		skill3.classList.add('active');
	}
	else{
		skill1.classList.remove('active');
		skill2.classList.remove('active');
		skill3.classList.remove('active');
	}
})




window.onload = start();