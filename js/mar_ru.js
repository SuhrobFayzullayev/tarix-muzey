let listVideo = document.querySelectorAll(".header__ru_none .header__ru_list");
let mainVideo = document.querySelector(".header__ru_cart a");
let header__en__link = document.querySelector(".header__ru_cart .header__en__link");

listVideo.forEach(a => {
    a.onclick = () => {
    listVideo.forEach(header__ru_list => header__ru_list.classList.remove("active"));
    a.classList.add("active");
    if (a.classList.contains("active")) {
      let text = a.children[0].innerHTML;
      header__en__link.innerHTML = text;
    }
  };
});


$(document).ready(function(){
  document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, options);
  });
    
    // Or with jQuery
    
  $('.dropdown-trigger').dropdown();
});

// ------------------------------------------------------------------------------------------