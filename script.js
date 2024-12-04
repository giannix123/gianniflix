document.querySelectorAll(".row img").forEach((img) => {
    img.addEventListener("click", () => {
        alert(`Stai guardando: ${img.alt}`);
    });
});
