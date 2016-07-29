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



//////////////////////////////////////////////articulos tienda

//articulo1 
$(".foto1 .categoriatienda").append("playeras"); //categoria
$(".foto1 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto1 .preciotienda").append("$30"); //precio
//descripcion
$(".foto1 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 


//articulo1 
$(".foto2 .categoriatienda").append("playeras"); //categoria
$(".foto2 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto2 .preciotienda").append("$30"); //precio
//descripcion
$(".foto2 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto3 .categoriatienda").append("playeras"); //categoria
$(".foto3 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto3 .preciotienda").append("$30"); //precio
//descripcion
$(".foto3 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto4 .categoriatienda").append("playeras"); //categoria
$(".foto4 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto4 .preciotienda").append("$30"); //precio
//descripcion
$(".foto4 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto5 .categoriatienda").append("playeras"); //categoria
$(".foto5 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto5 .preciotienda").append("$30"); //precio
//descripcion
$(".foto5 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 


//articulo1 
$(".foto6 .categoriatienda").append("playeras"); //categoria
$(".foto6 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto6 .preciotienda").append("$30"); //precio
//descripcion
$(".foto6 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto7 .categoriatienda").append("playeras"); //categoria
$(".foto7 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto7 .preciotienda").append("$30"); //precio
//descripcion
$(".foto7 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 


//articulo1 
$(".foto8 .categoriatienda").append("playeras"); //categoria
$(".foto8 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto8 .preciotienda").append("$30"); //precio
//descripcion
$(".foto8 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto9 .categoriatienda").append("playeras"); //categoria
$(".foto9 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto9 .preciotienda").append("$30"); //precio
//descripcion
$(".foto9 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto10 .categoriatienda").append("playeras"); //categoria
$(".foto10 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto10 .preciotienda").append("$30"); //precio
//descripcion
$(".foto10 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto11 .categoriatienda").append("playeras"); //categoria
$(".foto11 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto11 .preciotienda").append("$30"); //precio
//descripcion
$(".foto11 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 


//articulo1 
$(".foto12 .categoriatienda").append("playeras"); //categoria
$(".foto12 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto12 .preciotienda").append("$30"); //precio
//descripcion
$(".foto12 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 




//articulo1 
$(".foto13 .categoriatienda").append("playeras"); //categoria
$(".foto13 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto13 .preciotienda").append("$30"); //precio
//descripcion
$(".foto13 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 


//articulo1 
$(".foto14 .categoriatienda").append("playeras"); //categoria
$(".foto14 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto14 .preciotienda").append("$30"); //precio
//descripcion
$(".foto14 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto15 .categoriatienda").append("playeras"); //categoria
$(".foto15 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto15 .preciotienda").append("$30"); //precio
//descripcion
$(".foto15 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto16 .categoriatienda").append("playeras"); //categoria
$(".foto16 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto16 .preciotienda").append("$30"); //precio
//descripcion
$(".foto16 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto17 .categoriatienda").append("playeras"); //categoria
$(".foto17 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto17 .preciotienda").append("$30"); //precio
//descripcion
$(".foto17 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 


//articulo1 
$(".foto18 .categoriatienda").append("playeras"); //categoria
$(".foto18 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto18 .preciotienda").append("$30"); //precio
//descripcion
$(".foto18 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 


//articulo1 
$(".foto19 .categoriatienda").append("playeras"); //categoria
$(".foto19 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto19 .preciotienda").append("$30"); //precio
//descripcion
$(".foto19 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 


//articulo1 
$(".foto20 .categoriatienda").append("playeras"); //categoria
$(".foto20 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto20 .preciotienda").append("$30"); //precio
//descripcion
$(".foto20 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto21 .categoriatienda").append("playeras"); //categoria
$(".foto21 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto21 .preciotienda").append("$30"); //precio
//descripcion
$(".foto21 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto22 .categoriatienda").append("playeras"); //categoria
$(".foto22 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto22 .preciotienda").append("$30"); //precio
//descripcion
$(".foto22 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 



//articulo1 
$(".foto23 .categoriatienda").append("playeras"); //categoria
$(".foto23 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto23 .preciotienda").append("$30"); //precio
//descripcion
$(".foto23 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 


//articulo1 
$(".foto24 .categoriatienda").append("playeras"); //categoria
$(".foto24 .nombretienda").append("LOREM IPSUM DOLOR"); //titulo
$(".foto24 .preciotienda").append("$30"); //precio
//descripcion
$(".foto24 .contenttienda").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"); 
