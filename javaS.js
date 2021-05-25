var cartButtons = document.querySelectorAll('.cart-button');
var card_value = document.querySelector(".added");
var cartvalue = 0;

cartButtons.forEach(button => {
  button.addEventListener('click', cartClick);
});
function cartClick() {
  let button = this;
  button.classList.add('clicked');
    card_value.textContent = cartvalue += 1;
}