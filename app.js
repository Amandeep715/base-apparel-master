const form = document.getElementById("form");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const error = document.getElementById("error");
const regex = /^\w+([\.-]?\w+)*@*\w+([\.-]?\w+)*(.\w{2,3})+$/;

submit.addEventListener("click", () => {
    if(!email.value.match(regex)) {
        form.classList.add("invalid");
        error.setAttribute("aria-hidden", "false");
    } else {
        form.classList.remove("invalid");
        error.setAttribute("aria-hidden", "true");
    }
})
