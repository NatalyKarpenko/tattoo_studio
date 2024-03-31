function showList(id) {
    var lists = document.querySelectorAll('.list1');
    lists.forEach(function (list) {
        if (list.id === id) {
            list.style.display = 'block';
            list.querySelectorAll('li').forEach(function (item, index) {
                item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`; // Применяем анимацию к пунктам списка с задержкой
            });
        } else {
            list.style.display = 'none';
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = 50; // Дополнительное расстояние до начала показанной части секции

        window.scrollTo({
            top: target.offsetTop - offsetTop,
            behavior: 'smooth' // Плавная анимация прокрутки
        });
    });
});

// Получаем ссылку на кнопку "Наверх"
var backToTopButton = document.getElementById("back-to-top");

// Добавляем обработчик события клика на кнопку "Наверх"
backToTopButton.addEventListener("click", function () {
    // Прокручиваем страницу вверх плавно
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Добавляем обработчик события прокрутки страницы
window.addEventListener("scroll", function () {
    // Если пользователь прокрутил страницу вниз больше, чем на 500px, показываем кнопку "Наверх", иначе скрываем
    if (window.scrollY > 500) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        let newIndex = (i - index + totalSlides) % totalSlides;
        slide.style.order = newIndex;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Показать первый слайд при загрузке страницы
showSlide(currentIndex);

const handleDomContentLoaded = function () {
    const body = document.body;
    const header = document.querySelector('header');
    const burgerBtn = document.querySelector('header .nav-btn');
    const overlay = document.querySelector('.header .overlay');
    function handleBurgerClick() {
        if (header.classList.contains('is-active')) {
            closeNavigation();
        } else {
            openNavigation();
        }
    }
    function closeNavigation() {
        body.classList.remove('disable-scroll');
        header.classList.remove('is-active');
    }
    function openNavigation() {
        body.classList.add('disable-scroll');
        header.classList.add('is-active');
    }
    burgerBtn.addEventListener('click', handleBurgerClick);
    overlay.addEventListener('click', closeNavigation);
}
document.addEventListener('DOMContentLoaded', handleDomContentLoaded);

