
var cursor = document.getElementById('cursor');

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