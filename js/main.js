$(function() {
    jcf.replaceAll();
});

var tab = document.querySelectorAll(".tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tab.length; ++i) {

  tab[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tab.length; ++j) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr == contentAttr) {
        tab[j].classList.add("tab-active");
        tabPanes[j].classList.add("tab-pane-active"); 
      } else {
        tab[j].classList.remove("tab-active");
        tabPanes[j].classList.remove("tab-pane-active");
      }
    };
  });
}

Open(0);

function Open(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[n].style.display = "flex";
};

document.getElementById("lesson").addEventListener('click', function (e) {
  e.preventDefault()
  
  document.querySelector("#form1").scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

document.getElementById("logo-footer").addEventListener('click', function (e) {
  e.preventDefault()
  
  document.querySelector("#top").scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})