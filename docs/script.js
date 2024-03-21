document.getElementById("search-input").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada
        document.getElementById("search-form").submit(); // Envía el formulario
    }
});
