let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu-nav");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
  hamburger.classList.toggle("menu--active");
});


// scrolls

const animItems = document.querySelectorAll(".anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        window.pageYOffset > animItemOffset - animItemPoint &&
        window.pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("active");
      } else {
        if (animItem.classList.contains('.aNNHide')) {
          animItem.classList.remove("active");
        }
        
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

// clicks

document.getElementById("main-action-button").onclick = function () {
  document.getElementById("catalog").scrollIntoView({behavior: "smooth"});
};

let links = document.querySelectorAll(".menu-li > a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
      document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
  }
}


