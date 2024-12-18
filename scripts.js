function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    document.getElementById("response").textContent = `Merci, ${name}, pour votre soumission!`;
    return false;
}
