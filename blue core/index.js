////////////////////////////////////////slider blog
var slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}



////////////////////////////////////////gallery
var autornum ;
var slideIndexgall ;

function slidesgallinit(){
  autorselect(1);
}

function plusSlidesgall(n) {
  showSlidesgall(slideIndexgall += n);
}


var active="";
function selectfotoicon(n){
  if(autornum != n){
    autornum = n;
    slideIndexgall = 1;
  
    var autor = document.getElementsByClassName("autor");
    var autorfotos = document.getElementsByClassName("autorfotos");
    var autorbio = document.getElementsByClassName("autorbio");

    for (i = 0; i < autor.length; i++) {
        autor[i].className = autor[i].className.replace(" activeautor", "");
        autorfotos[i].className = autorfotos[i].className.replace(" activefotos", "");
        autorbio[i].className = autorbio[i].className.replace(" activebio", "");
    }
    autorfotos[autornum-1].className += " activefotos";
    autor[autornum-1].className += " activeautor";
    
    active="fotoicon";
  
    showSlidesgall(slideIndexgall);
  }
  else if(active=="fotoicon"){
    return 0;
  }
  else{
    var autorfotos = document.getElementsByClassName("autorfotos");
    var autorbio = document.getElementsByClassName("autorbio");
    
    autorbio[n-1].className = autorbio[n-1].className.replace(" activebio", "");

    autorfotos[n-1].className += " activefotos";
    slideIndexgall = 1;

    active="fotoicon";
  }
}
function selectbioicon(n){
  if(autornum != n){
    autornum = n;
    slideIndexgall = 1;
  
    var autor = document.getElementsByClassName("autor");
    var autorfotos = document.getElementsByClassName("autorfotos");
    var autorbio = document.getElementsByClassName("autorbio");

    for (i = 0; i < autor.length; i++) {
        autor[i].className = autor[i].className.replace(" activeautor", "");
        autorfotos[i].className = autorfotos[i].className.replace(" activefotos", "");
        autorbio[i].className = autorbio[i].className.replace(" activebio", "");
    }
    autor[autornum-1].className += " activeautor";
    autorbio[autornum-1].className += " activebio";
    active="bioicon";
  
    showSlidesgall(slideIndexgall);
  }
  else if(active=="bioicon"){
    return 0;
  }
  else{
    var autorfotos = document.getElementsByClassName("autorfotos");
    var autorbio = document.getElementsByClassName("autorbio");
    
    autorfotos[n-1].className = autorfotos[n-1].className.replace(" activefotos", "");

    autorbio[n-1].className += " activebio";

    active="bioicon";
  }
}



function autorselect(n) {
  if(autornum == n){
    return 0;
  }

  autornum = n;
  slideIndexgall = 1;

  var autor = document.getElementsByClassName("autor");
  var autorfotos = document.getElementsByClassName("autorfotos");
  var autorbio = document.getElementsByClassName("autorbio");

  for (i = 0; i < autor.length; i++) {
      autor[i].className = autor[i].className.replace(" activeautor", "");
      autorfotos[i].className = autorfotos[i].className.replace(" activefotos", "");
      autorbio[i].className = autorbio[i].className.replace(" activebio", "");
  }
  autorfotos[autornum-1].className += " activefotos";
  autor[autornum-1].className += " activeautor";
  active="fotoicon";

  showSlidesgall(slideIndexgall);
}

function showSlidesgall(n) {
  var i;

  var tempclassname="mySlidesgall"+autornum;
  var slides = document.getElementsByClassName(tempclassname);

  if (n > slides.length) {slideIndexgall = 1} 
  if (n < 1) {slideIndexgall = slides.length}

  
  var autors = document.getElementsByClassName("autor");
  for(var j=0; j<=autors.length; j++){
    var tempclassname="mySlidesgall"+j;
    var tempslides = document.getElementsByClassName(tempclassname);

    for (i = 0; i < tempslides.length; i++) {
      tempslides[i].style.display = "none"; 
    }
  }


  slides[slideIndexgall-1].style.display = "block"; 
}



///////////////////////////////////////////////////////////////////////////////////////tienda

var tiendaIndex = 1;


function currenttienda(n) {
  tiendaIndex=n;
  showSlidestienda(tiendaIndex);
}

function showSlidestienda(n) {
  var i;
  var dotstienda = document.getElementsByClassName("dottienda");
  
  var slides = document.getElementsByClassName("mySlidestienda");

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[tiendaIndex-1].style.display = "block";

  
  for (i = 0; i < dotstienda.length; i++) {
      dotstienda[i].className = dotstienda[i].className.replace(" active", "");
  }
  
  dotstienda[tiendaIndex-1].className += " active";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////tienda







//////////////////////////////////////////////////////////////////////////////////////////init///////////////////////////////////////////
showSlides(slideIndex); //blog
slidesgallinit(); //gallery
showSlidestienda(tiendaIndex); //tienda



