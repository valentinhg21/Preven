var splide = new Splide( '.splide', {
    autoplay    : true,
    rewind      : true,
});

  
splide.mount();
/* 
///////////////////////////////////////////////////////////
/////////////////////// Scroll Nav///////////////////////
///////////////////////////////////////////////////////////
*/
window.addEventListener('scroll', function(){
    const navDesk = document.getElementById("nav-desk");
    const form = document.getElementById("hero-form")
    
    if(this.window.scrollY < form.offsetTop){
        navDesk.classList.remove("active")
    }else{
        navDesk.classList.add("active")
    }
})
///////////////////////////////////////////////////////////
/////////////////////// Menu Desktop///////////////////////
///////////////////////////////////////////////////////////

const openMenuDesk = document.getElementById("open-desk")
const closeMenuDesk = document.getElementById("close-desk")
closeMenuDesk.style.display = "none"

openMenuDesk.addEventListener("click", function(){
    menu.classList.add("active")
    openMenuDesk.style.display="none"
    closeMenuDesk.style.display = "flex"
})
closeMenuDesk.addEventListener("click", function(){
    menu.classList.remove("active")
    openMenuDesk.style.display="flex"
    closeMenuDesk.style.display = "none"
})

const openMenu = document.getElementById("open")
const closeMenu = document.getElementById("close")
const menu = document.getElementById("menu")

closeMenu.style.display = "none"
openMenu.addEventListener("click", function(){
    menu.classList.add("active")
    openMenu.style.display="none"
    closeMenu.style.display = "flex"

})
closeMenu.addEventListener("click", function(){
    menu.classList.remove("active")
    openMenu.style.display="flex"
    closeMenu.style.display = "none"
})

const links = document.querySelectorAll('.links');

links.forEach(link => {
    link.addEventListener('click', function(){
        menu.classList.remove("active")
        closeMenu.style.display = "none"
        closeMenuDesk.style.display = "none"
        openMenu.style.display="flex"
        openMenuDesk.style.display="flex"

    })
});
/* 


/* 
///////////////////////////////////////////////////////////
/////////////////////// Carrousel ///////////////////////
///////////////////////////////////////////////////////////
*/

// const clientsCarrusel = document.querySelector(".clientes-content")



    // carousel();
    $('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:1600,
        autoplayHoverPause:true,
        loop:true,
        // margin: 30,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2,
                margin: 0,
            },
            1000:{
                items:3
                
            },
            1200:{
                items:2
            },
            1400:{
                items:3
            }
        }
    })


/* 
///////////////////////////////////////////////////////////
/////////////////////// Alert ///////////////////////
///////////////////////////////////////////////////////////
*/
let alertContainer = document.querySelector(".alert-container")
let alertBody = document.querySelector(".alert-body")
let closeBtn = document.querySelectorAll(".close-btn")

alertContainer.addEventListener('click', function(){
    closeAlert()
})
closeBtn.forEach(btn => {
    btn.addEventListener('click', function(){
        closeAlert()
    })
});
const closeAlert = () => {
    alertContainer.classList.remove("active")
}



/* 
///////////////////////////////////////////////////////////
/////////////////////// FormData ///////////////////////
///////////////////////////////////////////////////////////
*/
// Alert


// BTN FORM
const button = document.querySelectorAll(".button-form")
const form = document.getElementById("form-hero")

form.addEventListener('submit', function(e){

    e.preventDefault();
    // Values
    const nombre = document.getElementById("nombre").value
    const tel = document.getElementById("tel").value
    const email = document.getElementById("email").value
    const mensaje = document.getElementById("mensaje").value

    // Validations
    if(nombre.trim() === '' || tel.trim() === '' || email.trim() === '' || mensaje.trim() === '' ){
        alertContainer.classList.add('active')
        let errorHTML = "";
        errorHTML += `
            <h1 style="color: #d82d2d;"><i class="fas fa-exclamation-circle"></i> Error</h1>
            <p>Todos los campos tienen que estar llenos!</p>
        `
        alertBody.innerHTML = errorHTML;
        return;
    }

    const formData = new FormData(form)
    const url = 'http://dev.techcare.com.ar/LandingPreven/mail/mail.php'
    fetch(url, {
            method: 'POST',
            body: formData,
    })
    .then((response) => response.json())
    .then((dato) => {
        
        if (!dato.error) {
                alertContainer.classList.add('active')
                let sucessHTML = "";
                sucessHTML += `
                <h1 style="color: #08bce4;><i class="fas fa-check-circle"></i> Exitoso!</h1>
                <p>${dato.mensaje}</p>
                `
                alertBody.innerHTML = sucessHTML;
                form.reset()

            } else {
                let errorHTML = "";
                errorHTML += `
                <h1 style="color: #d82d2d;"><i class="fas fa-exclamation-circle"></i> Error</h1>
                <p>${dato.mensaje}</p>
                `
                alertBody.innerHTML = errorHTML;
            }
        })
})


const formContact = document.getElementById("contact-form")
formContact.addEventListener('submit', function(e){

    e.preventDefault();
    // Values
    const nombre = document.getElementById("nombre2").value
    const tel = document.getElementById("tel2").value
    const email = document.getElementById("email2").value
    const mensaje = document.getElementById("mensaje2").value
    const formData = new FormData(formContact)

    // Validations
    if(nombre.trim() === '' || tel.trim() === '' || email.trim() === '' || mensaje.trim() === '' ){
        alertContainer.classList.add('active')
        let errorHTML = "";
        errorHTML += `
            <h1><i class="fas fa-exclamation-circle"></i> Error</h1>
            <p>Todos los campos tienen que estar llenos!</p>
        `
        alertBody.innerHTML = errorHTML;
        return;
    }


    

    // const url = '../../mail/mail.php'
    // const url = 'https://dev.techcare.com.ar/LandingPreven/mail/mail.php'
    const url = 'http://dev.techcare.com.ar/LandingPreven/mail/mail.php'
    fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
            	'Access-Control-Allow-Origin': '*',
        	},
            body: formData,
    })
    .then((response) => response.json())
    .then((dato) => {
        
        if (!dato.error) {
            alertContainer.classList.add('active')
            let sucessHTML = "";
            sucessHTML += `
            <h1 style="color: #08bce4;><i class="fas fa-check-circle"></i> Exitoso!</h1>
            <p>${dato.mensaje}</p>
            `
            alertBody.innerHTML = sucessHTML;
            formContact.reset()
            } else {
                let errorHTML = "";
                errorHTML += `
                <h1 style="color: #d82d2d;"><i class="fas fa-exclamation-circle"></i> Error</h1>
                <p>${dato.mensaje}</p>
                `
                alertBody.innerHTML = errorHTML;
            }
        })
})