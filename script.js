//==============================================
//ADDED / EXTRA
//==============================================
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    // spaceBetween: 30,
    loop: true,
    observer: true, 
    observeParents: true,
    autoplay: {
        delay: 10000,
      },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  
  });

swiper.update();





//==============================================
//FROM CODESTITCH
//==============================================

// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

    // This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }



//ADDITIONAL JAVA SCRIPT (NOT FROM CODE STITCH)

const myButton1 = document.getElementById('book button1');
const myButton2 = document.getElementById('book button2');
const myButton3 = document.getElementById('book button3');
const myButton4 = document.getElementById('book button4');
const myButton5 = document.getElementById('book button5');
const myCloseButton = document.getElementById('close form button');
const mySubmitButton = document.getElementById('submit button')


myButton1.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
    openForm();
    }
});

myButton2.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        openForm();
    }
    });


myButton3.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        option1();
    }
    });


myButton4.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        option2();
    }
});


myButton5.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        option3();
    }
});

myCloseButton.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        closeForm();
    }
    });

mySubmitButton.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        notif();
        document.getElementById('cs-form-1333').reset();
        closeForm();
    }
    });

// document.getElementById('cs-form-1333').addEventListener('submit', submitForm);

function openForm() {
    document.getElementById("contact-1333").style.display = "flex";
    }
    
function closeForm() {
    document.getElementById("contact-1333").style.display = "none";
    document.getElementById('cs-form-1333').reset();
    }


function notif(){
    var notyfDemo = new Notyf({ duration: 5000 });
    notyfDemo.success('Booking form has been submitted!');
}

function submitForm(event){
    event.preventDefault();
    notif();
    document.getElementById('cs-form-1333').reset();
    closeForm();    
}

function option1(){
    openForm();
    document.getElementById('checkbox1-1333').checked = true;
}

function option2(){
    openForm();
    document.getElementById('checkbox2-1333').checked = true;
}

function option3(){
    openForm();
    document.getElementById('checkbox3-1333').checked = true;
}
