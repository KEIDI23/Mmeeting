// accordion start

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// accordion finish

// tabs start

function openCity(evt, tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    const tablinks = document.getElementsByClassName('tablinks');

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }

    const selectedTabs = document.getElementsByClassName(tabName);
    for (let i = 0; i < selectedTabs.length; i++) {
        selectedTabs[i].style.display = 'block';
    }

    evt.currentTarget.classList.add('active');
}

// tabs finish

// PopUpMenu
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const popup = document.getElementById('popup');
const openBtn_1 = document.getElementById('openBtn_1');
const openBtn_2 = document.getElementById('openBtn_2');
const openBtn_3 = document.getElementById('openBtn_3');
const openBtn_4 = document.getElementById('openBtn_4');
const openBtn_5 = document.getElementById('openBtn_5');
const openBtn_6 = document.getElementById('openBtn_6');
const openBtn_7 = document.getElementById('openBtn_7');
const openBtn_8 = document.getElementById('openBtn_8');
const openBtn_9 = document.getElementById('openBtn_9');

openBtn.addEventListener('click', function () {
    popup.classList.add('show');
});
openBtn_1.addEventListener('click', function () {
    popup.classList.add('show');
});
openBtn_2.addEventListener('click', function () {
    popup.classList.add('show');
});
openBtn_3.addEventListener('click', function () {
    popup.classList.add('show');
});
openBtn_4.addEventListener('click', function () {
    popup.classList.add('show');
});
openBtn_5.addEventListener('click', function () {
    popup.classList.add('show');
});
openBtn_6.addEventListener('click', function () {
    popup.classList.add('show');
});
openBtn_7.addEventListener('click', function () {
    popup.classList.add('show');
});
openBtn_8.addEventListener('click', function () {
    popup.classList.add('show');
});
openBtn_9.addEventListener('click', function () {
    popup.classList.add('show');
});

closeBtn.addEventListener('click', function () {
    popup.classList.remove('show');
});

const form = document.getElementById('registration-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения полей ввода
    const name = document.getElementById('name').value;
    const mail = document.getElementById('mail').value;
    const password = document.getElementById('password').value;

    // Отображаем сообщение об успешной регистрации
    form.style.display = 'none';
    successMessage.style.display = 'block';
});

// PopUpMenu

// BurgerMenu

const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.navbar');

menuToggle.addEventListener('change', function () {
    if (menuToggle.checked) {
        menu.classList.add('show');
    } else {
        menu.classList.remove('show');
    }
});

// BurgerMenu



