$(window).load(function() {
  // When the page has loaded
  $("body").fadeIn(1);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////scroll toolbar
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    //closeall();

    if (scroll >= 10) {
        $(".toolbarleft").addClass("bluebackground");
        $(".toolbarright").addClass("bluebackground");
        $(".toolbarrightlg").addClass("bluebackground");
    } else {
        $(".toolbarleft").removeClass("bluebackground");
        $(".toolbarright").removeClass("bluebackground");
        $(".toolbarrightlg").removeClass("bluebackground");
    }
});



var loginactive=false;
function openlogin(){
   if(loginactive==true){
      document.getElementById("login").style.display = "none";
      document.getElementById("loginlg").style.display = "none";
      loginactive=false;
   }
   else if(loginactive==false){
      document.getElementById("login").style.display = "block";
      document.getElementById("loginlg").style.display = "block";
      loginactive=true;
   }

   
   return 0;
}

var searchactive=false;
function opensearch(){
   if(searchactive==true){
      document.getElementById("search").style.display = "none";
      document.getElementById("searchlg").style.display = "none";
      searchactive=false;
   }
   else if(searchactive==false){
      document.getElementById("search").style.display = "block";
      document.getElementById("searchlg").style.display = "block";
      searchactive=true;
   }

   
   return 0;
}


function closeall(){
  document.getElementById("login").style.display = "none";
  document.getElementById("loginlg").style.display = "none";

  document.getElementById("search").style.display = "none";
  document.getElementById("searchlg").style.display = "none";
  loginactive=false;
}

////////////////////////////////////////////////////////////////////////////overlay menu

/* Open when someone clicks on the span element */
function openNav() {
    closeall();

    document.getElementById("myNav").style.width = "100%";
    document.getElementById("menucontent1").style.display = "none";
    document.getElementById("menucontent2").style.display = "none";

}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
