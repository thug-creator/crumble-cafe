import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

// 1. Создаем навигацию
function createNav() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Главная';
    homeBtn.dataset.tab = 'home'; // Чтобы легко находить кнопку

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Меню';
    menuBtn.dataset.tab = 'menu';

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Контакты';
    contactBtn.dataset.tab = 'contact';

    // Обработчики
    homeBtn.onclick = () => switchTab('home', loadHome, homeBtn);
    menuBtn.onclick = () => switchTab('menu', loadMenu, menuBtn);
    contactBtn.onclick = () => switchTab('contact', loadContact, contactBtn);

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    const content = document.getElementById('content');
    document.body.insertBefore(nav, content);
}

// 2. Логика переключения с выделением активной кнопки (Задание 1.3)
function switchTab(tabName, loadFunction, buttonElement) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Убираем класс active у всех кнопок
    const allButtons = document.querySelectorAll('nav button');
    allButtons.forEach(btn => btn.classList.remove('active'));

    buttonElement.classList.add('active');

    // Вызываем функцию, которая отрисует контент
    loadFunction();

    // --- Задание 3.3: Добавляем анимацию ---
    // Находим первый дочерний элемент, который только что создался, и добавляем ему класс анимации
    if (content.firstElementChild) {
        content.firstElementChild.classList.add('animate-fade');
    }
}

// 3. Инициализация при загрузке
createNav();
// Сразу загружаем главную и делаем её кнопку активной по умолчанию
const defaultBtn = document.querySelector('nav button[data-tab="home"]');
switchTab('home', loadHome, defaultBtn);