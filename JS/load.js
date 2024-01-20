window.addEventListener("load", function () {
    document.querySelector("#load_layer").classList.toggle("active");

    const myTimeout = setTimeout(removeLayer, 1000);
    function removeLayer() {
        document.querySelector("#load_layer").remove();
    }
});
