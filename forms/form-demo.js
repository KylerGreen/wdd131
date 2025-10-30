
function validateForm(event) {

  const theForm = event.target;
  const errors = [];
  let isValid = true;

  if (theForm.payment.value === "credit") {
    
    if (theForm.cardNumber.value !== "1234123412341234") {
      isValid = false;
      errors.push("Invalid Credit Card Number");
    }
  }

  if (theForm.name.value !== "Bob") {
    isValid = false;
    errors.push("Your name is not Bob");
  }

  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

function togglePaymentDetails(e) {
  
  const theForm = document.querySelector("#checkoutForm");
  const creditCardContainer = document.getElementById("cardNumber");
  const paypalContainer = document.getElementById("paypalName");

 
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  theForm.cardNumber.required = false;
  theForm.paypalName.required = false;


  if (theForm.payment.value === "credit") {
    creditCardContainer.classList.remove("hide");
    theForm.cardNumber.required = true;
  } else if (theForm.payment.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalName.required = true;
  }
}

function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

document.querySelector("#checkoutForm").addEventListener("submit", validateForm);
document.querySelector("#payment").addEventListener("change", togglePaymentDetails);