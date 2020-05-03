const html = document.querySelector('html');

var cursor = document.getElementById('cursor');



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


const creationWrapper = document.querySelector('.creation-wrapper');
const creation = document.querySelector('.black-title');

const creation1 = document.querySelector('.creation1');
const creation2 = document.querySelector('.creation2');
const creation3 = document.querySelector('.creation3');


const passionTitle = document.querySelector('.passion-title');

const passion1 = document.querySelector('.passion1');

const passionImg1 = document.querySelector('.passion1-img');

const passion2 = document.querySelector('.passion2');

const passionImg2 = document.querySelector('.passion2-img');

const passion3 = document.querySelector('.passion3');

const passionImg3 = document.querySelector('.passion3-img');


window.addEventListener('mousemove', ()=>{
	var x = event.clientX;
	var y = event.clientY;
	if ( typeof x !== 'undefined' ){
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    }
}, false);


$('.burger-container, a').hover( ()=>{
	cursor.classList.toggle('active');
})



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




$(window).scroll(function () {
	var scroll = window.pageYOffset;
	var menuHeight = burger.pageYOffset;
	btn.style.opacity = 1 + -scroll / 250 ;
	chouette.style.opacity = 1 + -scroll / 250 ;
	devWeb.style.opacity = 1 + -scroll / 250 ;
	chouette.style.marginLeft =  + scroll / 2  + "px"; 
	devWeb.style.marginRight =  + scroll / 2  + "px"; 


	if(scroll >= 100){
		competence.classList.add('active');
	}


	if ($('.competence ').isInViewport()) {
	        $('.competence').addClass('active');
	    } 
		else{
			$('.competence').removeClass('active');
		}

		if ($('.skill-box1 ').isInViewport()) {
	        $('.skill-box1').addClass('active');
	        $('.skill-box2').addClass('active');
	        $('.skill-box3').addClass('active');
	    } 

		else{
			$('.skill-box1').removeClass('active');
			$('.skill-box2').removeClass('active');
			$('.skill-box3').removeClass('active');
		}


		if ($('.creation-wrapper').isInViewport()) {
			creationWrapper.style.transform = "translateY(" +  scroll/10 + "px)";
		}



		if ($('.black-title').isInViewport()) {
	        $('.black-title').addClass('active');
		}

		else{
			$('.black-title').removeClass('active');		
		}




		if ($('.creation1').isInViewport()) {
	        $('.creation1').addClass('active');
	        $('.creation2').addClass('active');
	        $('.creation3').addClass('active');
		}
		else{
			$('.creation1').removeClass('active');
			$('.creation2').removeClass('active');
			$('.creation3').removeClass('active');
		}


		if ($('.passion-title').isInViewport()){
	        $('.passion-title').addClass('active');
		}
		else{
			$('.passion-title').removeClass('active');
		}

		if ($('.passion-paragraph-wrapper1').isInViewport()){
	        $('.passion1').addClass('active');
		}
		else{
	        $('.passion1').removeClass('active');
		}

		if ($('.passion-paragraph-wrapper2').isInViewport()){
	        $('.passion2').addClass('active');
		}
		else{
	        $('.passion2').removeClass('active');
		}


		if ($('.passion-paragraph-wrapper3').isInViewport()){
	        $('.passion3').addClass('active');
		}
		else{
	        $('.passion3').removeClass('active');
		}

		if ($('.draw').isInViewport()){
	        $('.draw').addClass('active');
		}
		else{
	        $('.draw').removeClass('active');
		}

		if ($('.teset').isInViewport()){
	        $('.teset').addClass('active');
		}
		else{
	        $('.teset').removeClass('active');
		}


		if ($('.contact-title').isInViewport()){
	        $('.contact-title').addClass('active');
		}
		else{
	        $('.contact-title').removeClass('active');
		}

		
		if ($('.contact-paragraph').isInViewport()){
	        $('.contact-paragraph').addClass('active');
		}
		else{
	        $('.contact-paragraph').removeClass('active');
		}


		if ($('.formation-title').isInViewport()){
	        $('.formation-title').addClass('active');
		}
		else{
	        $('.formation-title').removeClass('active');
		}



		

	

})




/*passion1.addEventListener('mousemove', ()=>{
	var x = event.clientX;
	var y = event.clientY;
	passionImg1.style.backgroundPosition =   x / 200 + "%" + y / 200 + "%";
})

passion2.addEventListener('mousemove', ()=>{
	var x = event.clientX;
	var y = event.clientY;
	passionImg2.style.backgroundPosition =   x / 200 + "%" + y / 200 + "%";
})

passion1.scrollBloc = function(){
	alert('aaa');
}*/


window.onload = start();