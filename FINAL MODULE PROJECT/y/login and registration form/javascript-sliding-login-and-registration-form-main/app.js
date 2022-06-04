const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");





inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});


// preloader

var loader = document.getElementById("preloader")
window.addEventListener("load", function(){
    loader.style.display="none"
    
    setTimeout(function(){
        $(".loader").fadeToggle();
    }, 3000)
})





function popup(){

  swal({
    title: "Are you sure?",
    text: "Once you fill out your data will be saved.",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("GOING TO HOME PAGE", {
      });
      window.location.href="/index.html";
    } else {
      swal("PLEASE FILLED CAREFULLY!");
    }
  });







  // swal("THANKS", "YOU ARE SUCCESSFULY LOGIN","success")
  
  // .then((value) => {
  //   swal("GOING TO HOME PAGE");
  //   window.location.href="/index.html";
  //});
}

// function stop(){
//   clearTimeout(time)
// }





