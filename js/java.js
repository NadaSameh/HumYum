
      
         
/*tween max workdetails */
var tl = new TimelineLite();
tl.set(".works-details", {visibility:"visible"})
.from(".works-details #work1", 2, { left:-200,  autoAlpha:0}, 1, "stagger") 
.from(".works-details #work2", 2, { left:-200,  autoAlpha:0}, 1, "stagger")
.from(".works-details #work3", 2, { left:-200,   autoAlpha:0},1, "stagger"); 

  tl.pause();

$(document).ready(function(){
var distance=$('.works-details').offset().top;
console.log("distance top   =" + distance);
$(window).scroll(function(){
 var dist_scroll=window.pageYOffset;
    console.log("distance scroll  =" + dist_scroll);
 if(dist_scroll > (distance - 700)){
  tl.play();
 }
});
});


/*tween max blogdetails */
var t2 = new TimelineLite();
    t2.set(".blog-content", {visibility:"visible" ,position:"relative"})
      .staggerFrom(".blog-content .blog-cont", 1.5 ,{scale:0, autoAlpha:0 }, 1, "stagger"); 
     
 t2.pause();

$(document).ready(function(){
var distance=$('.blog-content').offset().top;
//console.log("distance top   =" + distance);
$(window).scroll(function(){
var dist_scroll = window.pageYOffset;
 //console.log("distance scroll  =" + dist_scroll);
if(dist_scroll > (distance -600)){
 t2.play();
}
});
});

$(document).ready(function(){
// $("body").css('overflow','hidden');
$(window).load(function(){
//loading element
$('.loading-overlay .spinner').fadeOut(500 ,
function(){
 //show scroll
 $("body").fadeIn(500).css('overflow','visible');
 $(this).parent().fadeOut(500,
 function(){
     $(this).remove(); 
 
 });
});


});
});

$(document).ready(function(){
var typed_one = new Typed('#typed_one', {
stringsElement: '#typed-strings_one',
backSpeed: 200,
typeSpeed: 100

 });   
         
}); 




$(document).ready(function(){
$(".link-blog .links").each(function(){
$(this).prepend("<span></span>");
$(this).find('span').eq(0).addClass('span_hover');
});
$(".hover_left").hover(function(){
$(this).find('span').eq(0).animate({
 width:'100%'
},500);

},function(){
$(this).find('span').eq(0).animate({
 width:'0'
},500); 
});
});


/*Moving background */
const background1 = document.querySelector('.header .move_image');
const listner1 = document.querySelector('.header .container-fluid');
const windowWidth1 = window.innerWidth / 5;
const windowHeight1 = window.innerHeight / 5 ;

listner1.addEventListener('mousemove', function(event){
const mouseX = event.clientX / windowWidth;
const mouseY = event.clientY / windowHeight;

background1.style.transform = "translate3d(-"+mouseX+"%, -"+mouseY+"% , 0)";
});  



const background = document.querySelector('.content .move_image');
const listner = document.querySelector('.content .container-fluid');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5 ;

listner.addEventListener('mousemove', function(e){
const mouseX = e.clientX / windowWidth;
const mouseY = e.clientY / windowHeight;

background.style.transform = "translate3d(-"+mouseX+"%, -"+mouseY+"% , 0)";
});



var nice = false;

$(function() {
nice = $("html").niceScroll({
"background-color":"#ee3324",
});
});


/*typing it for conetent */
$(document).ready(function(){ 
var instance= new TypeIt('.type-it', {
 strings: 'Need content here .',
 speed: 150,
},false);
//instance.init();

var distance=$('.content').offset().top;
console.log("distance top   =" + distance);
$(window).scroll(function(){
var dist_scroll = window.pageYOffset;
console.log("distance scroll  =" + dist_scroll);
if(dist_scroll > (distance-300)){
instance.init();
}
});
});