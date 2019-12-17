// Global elements selection
const menuItem = document.querySelectorAll("li[select]");
const close = document.getElementById("closi");
const navBlocks = document.querySelectorAll(".navb");
const header = document.getElementsByTagName("header")[0];
const searchIcon = document.getElementById("search-icon");

// add class function
const addClass = (selector, className) => {
  selector.classList.add(className);
};

// hide class function
const removeClass = (selector, className) => {
  selector.classList.remove(className);
};

// Menu item hover
menuItem.forEach(item => {
  let select = item.getAttribute("select");
  item.addEventListener("mouseover", () => {
    // add active class to header tag
    addClass(header, "active");

    // remove active class from all menu items
    menuItem.forEach(item => {
      removeClass(item, "active");
    });

    // add active class to current selected item
    addClass(item, "active");

    // hide all blocks
    navBlocks.forEach(navb => {
      navb.style.display = "none";
    });

    // show only current selected block
    document.getElementById(select).style.display = "block";

    // show hidden space
    addClass(close, "active");
  });
});

// Space click
close.addEventListener("click", () => {
  // hide all blocks
  navBlocks.forEach(navb => {
    navb.style.display = "none";
  });

  // hide dark space
  removeClass(close, "active");

  // remove active icon from menu
  menuItem.forEach(item => {
    removeClass(item, "active");
  });

  // remove active class from header tag
  removeClass(header, "active");
});

// Search icon
searchIcon.addEventListener("click", e => {
  e.preventDefault();
});

// close block button
const closeBtn = document.getElementById("close-icon");

closeBtn.addEventListener("click", e => {
  e.preventDefault();

  // hide all blocks
  navBlocks.forEach(navb => {
    navb.style.display = "none";
  });

  // hide dark space
  removeClass(close, "active");

  // hide dark space
  removeClass(close, "active");

  // remove active icon from menu
  menuItem.forEach(item => {
    removeClass(item, "active");
  });

  // remove active class from header tag
  removeClass(header, "active");
});
