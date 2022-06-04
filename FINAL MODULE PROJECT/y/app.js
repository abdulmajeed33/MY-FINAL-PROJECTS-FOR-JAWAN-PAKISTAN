
//after loading window


function first(){
  swal("Make sure you login first","THANK YOU", "success")
}
 var id = setTimeout(first, 3000)
 clearInterval
  


// pre loader

var loader = document.getElementById("preloader")
window.addEventListener("load", function(){
    loader.style.display="none"


    
    setTimeout(function(){
        $(".loader").fadeToggle();
    }, 3000)
})


