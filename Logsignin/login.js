const form = document.querySelector("#form");
const submitLogin = document.querySelector("#LoginButton");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload
    const d = new FormData(form);
    
    // Log form data to check if it's being captured
    for (let [key, value] of d.entries()) {
        console.log(key + ": " + value);
    }
});








