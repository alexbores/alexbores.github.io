function setBookName(){
    var name = prompt("book name:");
    
    var url="/"+name;
    $.get(url)
    .done(function() { 
         name = "?name="+name;
         $("a").each(function()
         { 
            this.href = (name);
         });
         $(".createBtn").css("display","initial");
	     return 0;
    }).fail(function() { 
        alert("file not found!");
    })

    
}