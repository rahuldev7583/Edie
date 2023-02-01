let menu = document.getElementById("menu");
let menuIcon = document.getElementById("menuIcon");
let close = document.getElementById("close");

menu.onclick = () => {
  menu.style.display = "none";
  menuIcon.style.display = "block"
};
menuIcon.onclick = () => {
  menu.style.display = "block";
  menuIcon.style.display = "none";
};

close.onclick = () => {
  menuIcon.style.display = "block";
  menu.style.display = "none";
};
