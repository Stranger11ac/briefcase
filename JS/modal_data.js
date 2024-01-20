
$(document).ready(function(){

    // SE NECECITA EL index que es la posicion del objeto y luego el objeto en si
    $.each($(".btnT"), function(index, button) {
        $(button).click(function() {
            // console.log(button)
            
            $slipObject = $(button).data('btnT');
            
            // console.log($slipObject)

            // $.each($('.slip.active'), function(indexMod, valueMod) {
            //     console.log(valueMod);
            //     $(valueMod).slideDown(500).removeClass('active');
            // });
            
            // $.each($('.slip.active'), function(indexMod, valueMod) {
            //     $(valueMod).slideUp(500).removeClass('active');
            // });

            $('.slip#'+$slipObject).slideToggle(500).addClass('active');
                        
        });
    });
    
});



const modalBtns = document.querySelectorAll(".btn");
modalBtns.forEach(function (btn) {
    // console.log(btn);
    btn.onclick = function () {
        const modal2 = btn.getAttribute("data-btn");
        // const modal2 = btn.dataset("btn"); // No funciona asi, funciona solo con un (1) objeto
        // console.log(modal2);
        document.getElementById('layer_modal').classList.add('active');
        document.getElementById(modal2).classList.add('active');
    };
});

var closeBtns = document.querySelectorAll(".close_modal");
closeBtns.forEach(function (btn) {
    btn.onclick = function () {
        var modalOb = document.querySelectorAll(".modal");
        modalOb.forEach(function (modal) {
            // window.setTimeout(
                modal.classList.remove('active')
            // , 355000);
        });
        document.getElementById('layer_modal').classList.remove('active')
    };
});




// ----------------------------------------------------------------
// NO FUNCIONO...


// $(document).ready(function(){

// SE NECECITA EL index que es la posicion del objeto y luego el objeto en si
// $.each($(".btn"), function(index, value) {
//     $(value).click(function() {
//         console.log($(value).data('btn')+ ':' +$(value).data('text'));
//         modal = $(value).data('btn')+ ':' +$(value).data('text');
//         // modal = $(value).data('text');
        
//         const Toast = Swal.mixin({
//             toast: true,
//             position: 'top-end',
//             showCloseButton: true,
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             customClass: {
//               icon: 'icon_alert',
//               title: 'title_alert fs-25',
//               closeButton: 'close_button_alert',
//             },
//             didOpen: (toast) => {
//               toast.addEventListener('mouseenter', Swal.stopTimer)
//               toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//           })
          
//           Toast.fire({
//             icon: 'success',
//             title: modal
//           })
//     });
// });
    




    // $(".btn").for(function(btn){
    //     console.log(btn);
        
    // $(".btn").forEach(function(btn){
    //     console.log(btn);

// SE NECECITA EL index que es la posicion del objeto y luego el objeto en si
//     $.each($(".btn"), function(index, value) {
//     // $.each($(".btn"), function(value) {
//         // console.log($(value));
//         // console.log(value);
//         // btnDataText = $(value).data('text');
//         // console.log(btnDataText);
//         $(value).click(function() {
//         // value.click(function() {
//             // console.log(value.data('btn')+ ':' +$(value).data('text'));
//             console.log($(value).data('btn')+ ':' +$(value).data('text'));
//             // console.log(btnDataText);
//         });

//     // $(".btn").each(function(btn){
//         // btnObject = btn;

//         // console.log(btnObject);
//         // console.log($(".btn").data('btn'));

//         // btn.click(function() {
//         //     alert('alerta');
//         // });

//         // console.log(textbtn);

//         // posBtn.attr('data-text') = btn;
        
//         // console.log(posBtn);
//         // btn.onclick = function () {
//         //     const modal = btn.data("text");
//         //     console.log(modal);
//         // };
//     });


    
//     // $('#5demo').on('click', function(e) {
//     //     $('li').each(function(index) {
//     //         $(this).css('background-color', 'orange')
//     //         .delay(index * 200)
//     //         //  .fadeOut(1500);
//     //     });

//     //     e.preventDefault();
//     // });
      
    
// });




// var closeBtns = document.querySelectorAll(".close_modal");
// closeBtns.forEach(function (btn) {
//     btn.onclick = function () {
        
//         var modalOb = document.querySelectorAll(".modal");
//         modalOb.forEach(function (modal) {
//             modal.classList.remove('active')
//             // console.log(modal);
//         });
        
//         document.getElementById('layer_modal').classList.remove('active');
        
//         // console.log(btn);
//         // console.log(index);
//         // document.querySelectorAll(layer).classList.remove('active');

//         // document.querySelector('.modal').classList.remove('active');
//         // var modal = (btn.closest(".modal").classList.remove('active'));
//     };
// });





// const modalBtns = document.querySelectorAll(".btn");
// modalBtns.forEach(function (btn) {
//     console.log(btn);
//     btn.onclick = function () {
//         const modal = btn.getAttribute("data-text");
//         // document.getElementById(modal).style.display = "block";
//         console.log(modal);

//         const Toast = Swal.mixin({
//             toast: true,
//             position: 'top-end',
//             showCloseButton: true,
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             customClass: {
//               icon: 'icon_alert',
//               title: 'title_alert fs-25',
//               closeButton: 'close_button_alert',
//             },
//             didOpen: (toast) => {
//               toast.addEventListener('mouseenter', Swal.stopTimer)
//               toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//           })
          
//           Toast.fire({
//             icon: 'success',
//             title: modal
//            // title: 'este es un contenido mucho mas largo de lo comun para ver como se comporta en la alerta de tamaño pequeño'
//           })
//     };
// });

// var closeBtns = document.querySelectorAll(".modal-close");
// closeBtns.forEach(function (btn) {
//     btn.onclick = function () {
//         var modal = (btn.closest(".modal").style.display = "none");
//     };
// });

// window.onclick = function (e) {
//     if (e.target.className === "modal") {
//         e.target.style.display = "none";
//     };
// }



// Nop
        // const btnaction = document.querySelectorAll('.btn');
        
        // btnaction.forEach(()=>{
        //     btnaction.onclick = () => {
        //         console.log(btnaction.dataset.text);
        //     }
        // })

        // for(var i=0; i<btnaction.length; i++){
        //     console.log(btnaction[i].dataset.text);
        // }

        
        // function dataBtns() {
        //     const objetoBtn=document.querySelectorAll('.btn');
        //     console.log(objetoBtn.length);
            
        //     for(var i=0; i<objetoBtn.length; i++){
                
                // trae el texto del atributo data de cada elemento
        //         dataText=objetoBtn[i].dataset.btn;
        //         console.log('Data= '+ dataText);
        //     }
        // }
                
        // dataBtns();