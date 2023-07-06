let collapseEl = document.getElementsByClassName("collapse-label");
let sidebarImgEl = document.getElementById("sidebarLogo");
let sidebarEl = document.getElementsByClassName("sidebar");
let sidebarToggleEl = document.getElementById("sidebarToggleIcon");
let arrowIconEl = document.getElementById("arrowIcon");
let sidebarIconsEl = document.getElementsByClassName("sidebar__icons")
let authSidebarIconEl = document.getElementsByClassName("author-sidebar__icon")

//---------------------accordion-------------

console.log(sidebarToggleEl);
let boolVal = true;
console.log(authSidebarIconEl,"--->");

function expandSidebar() {
  // let boolVal=!boolVal
  // console.log(boolVal)
  for (let i = 0; i < collapseEl.length; i++) {
    collapseEl[i].classList.remove("d-none");
  }
  for (let i = 0; i < sidebarIconsEl.length; i++) {
    sidebarIconsEl[i].classList.remove("sidebar__icons--expanded");
  }
  for (let i = 0; i < authSidebarIconEl.length; i++) {
    authSidebarIconEl[i].classList.add("author-sidebar")
  }

  sidebarEl[0].classList.remove("sidebar__collapsed");
  sidebarImgEl.src = "img/Sidebar/be-assess-expanded-logo.png";

  sidebarImgEl.classList.add("sidebar__logo--expanded");
  arrowIconEl.classList.remove("arrow__icon--collapsed");
  arrowIconEl.classList.add("arrow__icon");
  sidebarToggleEl.setAttribute("onclick", "collapseSidebar()");
}

function collapseSidebar() {
  for (let i = 0; i < collapseEl.length; i++) {
    collapseEl[i].classList.add("d-none");
  }
  for (let i = 0; i < sidebarIconsEl.length; i++) {
    sidebarIconsEl[i].classList.add("sidebar__icons--expanded");
  }
  for (let i = 0; i < authSidebarIconEl.length; i++) {
    authSidebarIconEl[i].classList.remove("author-sidebar")
  }

  sidebarEl[0].classList.add("sidebar__collapsed");
  sidebarImgEl.classList.remove("sidebar__logo--expanded");
  sidebarImgEl.src = "img/Sidebar/be-assess-logo.png";
  arrowIconEl.classList.remove("arrow__icon");
  arrowIconEl.classList.add("arrow__icon--collapsed");
  sidebarToggleEl.setAttribute("onclick", "expandSidebar()");
}



$(document).ready(function () {
  $('.dropdown-search').select2({
    width: 'resolve'
  });
});

$( function() {
  $( ".draggable-options-container" ).sortable();
} );