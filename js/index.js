window.addEventListener('DOMContentLoaded', () => {
  var hamShow = document.querySelector('.mobile-ham');
  var hamHide = document.querySelector('.mobile-close');
  var navList = document.getElementById('nav_list');
  var navBg = document.getElementById('nav_bg_mobile');
  var navBtn = document.getElementById("nav_btn");
  hamShow.addEventListener('click', () => {
    hamHide.style.display = 'block';
    hamShow.style.display = 'none';
    navList.style.display = 'flex';
    navBg.style.display = 'block';
    navBtn.style.display = 'block';
  })
  hamHide.addEventListener('click', () => {
    hamHide.style.display = "none";
    hamShow.style.display = "block";
    navList.style.display = "none";
    navBg.style.display = "none";
    navBtn.style.display = "none";
  });
}); 