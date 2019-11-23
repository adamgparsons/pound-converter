// url of api
const url = "https://api.exchangeratesapi.io/latest?base=GBP";
// where the price will go
const convertedPriceTag = document.querySelector(".converted-price");
// nav items
const navItems = document.querySelectorAll("nav a");

let currency = "AUD";

const getPrice = function() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      convertedPriceTag.innerText =
        data.rates[currency].toFixed(2) + " " + currency;
    });
};

navItems.forEach(navItem => {
  navItem.addEventListener("click", function() {
    currency = this.getAttribute("data-currency");
    getPrice();
    navItems.forEach(navItem => {
      navItem.classList.remove("selected");
    });
    this.classList.add("selected");
  });
});

// refresh every minute
setInterval(function() {
  getPrice();
}, 6000);

// running getPrice on page load
getPrice();
