document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("registration-form").classList.remove("hidden");
});

document.getElementById("primer-hijo").addEventListener("change", function() {
    let numeroHijoContainer = document.getElementById("numero-hijo-container");
    numeroHijoContainer.classList.toggle("hidden", this.value === "sí");
});

document.getElementById("bebe-nacido").addEventListener("change", function() {
    let embarazoContainer = document.getElementById("embarazo-container");
    let tiempoBebeContainer = document.getElementById("tiempo-bebe-container");

    embarazoContainer.classList.toggle("hidden", this.value === "sí");
    tiempoBebeContainer.classList.toggle("hidden", this.value === "no");
});

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let mensaje = `Hola, ${nombre}, comencemos este proceso nutriendo amor, un día a la vez. 💕`;

    document.getElementById("registration-form").classList.add("hidden");
    document.getElementById("success-screen").classList.remove("hidden");
    document.getElementById("success-message").textContent = mensaje;

    setTimeout(function() {
        document.getElementById("continue-btn").classList.remove("hidden");
    }, 4000);
});
