const errorMsg = document.getElementById("error-msg");
const form = document.getElementById("form");
const emailInput = document.getElementById("email-input");
const successMsg = document.getElementById("success-msg");
const card = document.getElementById("card");
const emailSubmit = document.getElementById("email-text");

const handleSubmit = (e) => {
    e.preventDefault(e);
    card.classList.toggle("hidden");
    successMsg.classList.toggle("hidden");
    emailSubmit.textContent = emailInput.value;
}

form.addEventListener("submit", handleSubmit);

emailInput.addEventListener("invalid", (e)=>{
    let inputValue = e.target;
    console.log(inputValue.validity);
    if(inputValue.validity.typeMismatch || inputValue.validity.typeMismatch) {
        inputValue.setCustomValidity(" ");
        errorMsg.classList.remove("hidden");
        emailInput.classList.add("input-error");
    }
})
emailInput.addEventListener("input", (e)=> {
    errorMsg.classList.add("hidden");
    emailInput.classList.remove("input-error");
})

