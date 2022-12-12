// const hamb = document.querySelector("#hamb");
// const popup = document.querySelector("#popup");
// const menu = document.querySelector("#menu").cloneNode(1);
// const body = document.body;

// hamb.addEventListener("click", hambHandler);

// function hambHandler(e) {
//   e.preventDefault();
//   popup.classList.toggle("open");
//   hamb.classList.toggle("active");
//   body.classList.toggle("noscroll");
//   renderPopup();
// }

// function renderPopup() {
//   popup.appendChild(menu);
// }

// // Код для закрытия меню при нажатии на ссылку

// const links = Array.from(menu.children);

// links.forEach((link) => {
//   link.addEventListener("click", closeOnClick);
// });

// function closeOnClick() {
//   popup.classList.remove("open");
//   hamb.classList.remove("active");
//   body.classList.remove("noscroll");
// }






// Меню Бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body') 
if(iconMenu){
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0){
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });


  function onMenuLinkClick(e){
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if(iconMenu.classList.contains('_active')){
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });

      e.preventDefault();
    }
  }
}