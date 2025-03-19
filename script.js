document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your order, " + document.getElementById("name").value + "!\nWe will contact you shortly.");
  this.reset();
});