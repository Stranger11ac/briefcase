// depliege de menu #######################################
const DOM_body = document.body;
const menu_section = document.querySelector(".menu_section");
const btn_toggle = document.querySelector(".btn_openmenu");

btn_toggle.addEventListener("click", function () {
    menu_section.classList.toggle("menu_open");
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, 250);
});

// Cambio de colores #####################################
const btncolors = document.querySelectorAll(".btn_color");

btncolors.forEach((btnc1) => {
    btnc1.addEventListener("click", () => {
        const colorbody = btnc1.getAttribute("data-color");

        // console.log(colorbody);
        localStorage.setItem("color", colorbody);

        DOM_body.setAttribute("id", colorbody);
        btncolors.forEach((allbtn) => {
            allbtn.classList.remove("active");
        });

        btnc1.classList.add("active");

        // const Toast = Swal.mixin({
        //     toast: true,
        //     position: 'top',
        //     showConfirmButton: false,
        //     showCloseButton: true,
        //     timer: 2000,
        //     timerProgressBar: true,
        //       customClass: {
        //         icon: 'icon_alert',
        //         title: 'title_alert',
        //         closeButton: 'close_button_alert',
        //       },
        //     didOpen: (toast) => {
        //       toast.addEventListener('mouseenter', Swal.stopTimer);
        //       toast.addEventListener('mouseleave', Swal.resumeTimer);
        //     }
        //   });
        //   Toast.fire({
        //     icon: "info",
        //     title: "Se cambió el <strong>Color Distintivo</strong>"
        //   });
    });
});

const colorGuardado = localStorage.getItem("color");
if (colorGuardado) {
    const activebtnColor = document.querySelector(`[data-color="${colorGuardado}"]`);

    btncolors.forEach((allbtn) => {
        allbtn.classList.remove("active");
    });

    DOM_body.setAttribute("id", colorGuardado);
    activebtnColor.classList.add("active");
}


// Obtener el tema del sistema
var tema = window.matchMedia("(prefers-color-scheme: dark)");

// Obtener los elementos del DOM
var checkbox = document.getElementById("systemTheme");
var them_switch = document.querySelector(".switch");
var switch_btn = document.querySelector(".switch_btn");
var switch_title = document.querySelector(".switch_title");
var switch_text = document.querySelector("#switch_text");

// Función para cambiar el tema según el valor del checkbox y el tema del sistema
function cambiarTema() {
    if (checkbox.checked) {
        // Usar el tema del sistema
        if (tema.matches) {
            // Tema oscuro
            localStorage.setItem("theme", "dark");
            DOM_body.classList.add("dark-theme");
            DOM_body.classList.remove("light-theme");
            switch_text.innerText = "Oscuro";
        } else {
            // Tema claro
            localStorage.setItem("theme", "light");
            DOM_body.classList.add("light-theme");
            DOM_body.classList.remove("dark-theme");
            switch_text.innerText = "Claro";
        }
        // Deshabilitar el switch
        them_switch.setAttribute("disabled", true);
        them_switch.classList.add("object_disabled");
        switch_title.classList.add("object_disabled");
        // Guardar el estado del checkbox
        localStorage.setItem("systemtheme", "checked");
        localStorage.setItem("switchdisabled", "true");
    } else {
        // Usar el tema elegido por el switch
        if (them_switch.classList.contains("active")) {
            // Tema claro
            localStorage.setItem("theme", "light");
            localStorage.setItem("switch", "");
            DOM_body.classList.add("light-theme");
            DOM_body.classList.remove("dark-theme");
            switch_text.innerText = "Claro";
        } else {
            // Tema oscuro
            localStorage.setItem("theme", "dark");
            localStorage.setItem("switch", "active");
            DOM_body.classList.add("dark-theme");
            DOM_body.classList.remove("light-theme");
            switch_text.innerText = "Oscuro";
        }
        // Habilitar el switch
        them_switch.removeAttribute("disabled");
        them_switch.classList.remove("object_disabled");
        switch_title.classList.remove("object_disabled");
        // Guardar el estado del checkbox
        localStorage.setItem("systemtheme", "notchecked");
        localStorage.setItem("switchdisabled", "false");
    }
}

// Añadir los eventos al checkbox y al switch
checkbox.addEventListener("change", cambiarTema);
them_switch.addEventListener("click", () => {
    // Cambiar el estado del switch
    them_switch.classList.toggle("active");
    // Llamar a la función cambiarTema
    cambiarTema();
});

// Se ejecuta siempre que se cambia el tema
tema.addEventListener("change", cambiarTema);

// Al cargar la página, obtener el tema y el estado del checkbox guardados
var temaGuardado = localStorage.getItem("theme");
var checkboxGuardado = localStorage.getItem("systemtheme");
var switchdisabled = localStorage.getItem("switchdisabled");

// Si hay un tema guardado, aplicarlo al body
if (temaGuardado === "light") {
    DOM_body.classList.add("light-theme");
    DOM_body.classList.remove("dark-theme");
    them_switch.classList.add("active");
} else {
    DOM_body.classList.add("dark-theme");
    DOM_body.classList.remove("light-theme");
    them_switch.classList.remove("active");
}

// Si hay un estado del checkbox guardado, aplicarlo al checkbox
if (checkboxGuardado) {
    checkbox.checked = checkboxGuardado === "checked";
}

if (switchdisabled === "true") {
    switch_btn.setAttribute("disabled", true);
    them_switch.classList.add("object_disabled");
    them_switch.classList.add("object_disabled");
    switch_title.classList.add("object_disabled");
} else {
    switch_btn.removeAttribute("disabled");
    them_switch.classList.remove("object_disabled");
    them_switch.classList.remove("object_disabled");
    switch_title.classList.remove("object_disabled");
}

// Cookies ######################################
var peso = JSON.stringify(localStorage).length; // peso en bytes
document.querySelector(".cookies_size").innerHTML = `${peso - 2} bytes`; // mostrar el peso en el html

const btnDelCookies = document.getElementById("deleteCookie");
btnDelCookies.addEventListener("click", function () {
    localStorage.clear();

    var cookies = document.cookie.split(";"); // obtener un array con todas las cookies
    for (var i = 0; i < cookies.length; i++) {
        // recorrer el array
        var cookie = cookies[i]; // obtener la cookie actual
        var eqPos = cookie.indexOf("="); // obtener la posición del signo =
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie; // obtener el nombre de la cookie
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // borrar la cookie
    }
    location.reload();
});

document.oncontextmenu = function () {
    return false;
};



// Tarjetas ##########################################
// const cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//     card.addEventListener("click", () => {
//         if (card.classList.contains("active")) {
//             card.classList.remove("active");
//         } else {
//             cards.forEach((allcard) => {
//                 allcard.classList.remove("active");
//             });
//             card.classList.add("active");
//             setTimeout(() => {
//                 card.classList.remove("active");
//             }, 120000);
//         }
//     });
// });




