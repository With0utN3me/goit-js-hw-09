const form = document.querySelector("form")
let localStoragekey = "feedback-form-state";
let formData = {};
window.addEventListener("load", () => { 
    if (localStorage.getItem(localStoragekey) !== null ){
        let parsedData = JSON.parse(localStorage.getItem(localStoragekey));
        form.elements.email.value = parsedData.email ?? "";
        form.elements.message.value = parsedData.message ?? "";
    };
})

form.addEventListener("input", () => {
    formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }
    localStorage.setItem(localStoragekey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
    let parsedData = JSON.parse(localStorage.getItem(localStoragekey));
    evt.preventDefault();
    console.log(parsedData);
    localStorage.removeItem(localStoragekey);
    form.reset();
});
