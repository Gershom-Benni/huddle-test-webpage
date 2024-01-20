const email = document.getElementById("email");
const submit = document.getElementById("submit-btn");
const tooltip = document.getElementById("tool-tip");

const emailValidation = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};

submit.addEventListener("click", function (event) {
    if (!emailValidation(email.value)) {
        event.preventDefault();
        tooltip.style.display = "block";
    } else {
        tooltip.style.display = "none";
    }
});
