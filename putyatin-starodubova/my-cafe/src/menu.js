import menuData from './menu-data.json';
// Импортируем картинки, чтобы Webpack их увидел и скопировал в dist
import croissantImg from './images/croissant.jpg';
import tiramisuImg from './images/tiramisu.jpg';
import cheesecakeImg from './images/cheesecake.jpg';

// Создаем объект для связи имени файла из JSON и импортированной картинки
const images = {
    'croissant.jpg': croissantImg,
    'tiramisu.jpg': tiramisuImg,
    'cheesecake.jpg': cheesecakeImg
};

export function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuDiv = document.createElement('div');

    // --- Задание 3.2: Счётчик ---
    // Получаем текущее число (если ничего нет, то 0) и прибавляем 1
    let visits = parseInt(localStorage.getItem('menuVisits')) || 0;
    visits++;
    localStorage.setItem('menuVisits', visits);

    const headline = document.createElement('h1');
    headline.textContent = 'Наше меню';

    // Выводим счетчик
    const visitCounter = document.createElement('p');
    visitCounter.textContent = `Вы открывали это меню ${visits} раз(а).`;
    visitCounter.style.fontWeight = 'bold';
    visitCounter.style.color = '#8b4513';

    menuDiv.appendChild(headline);
    menuDiv.appendChild(visitCounter);

    menuData.forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.style.margin = '20px 0';
        dishDiv.style.padding = '15px';
        dishDiv.style.border = '1px solid #8b4513';
        dishDiv.style.borderRadius = '8px';
        dishDiv.style.backgroundColor = '#fff';

        // Берем картинку из нашего объекта
        const imgSrc = images[dish.image];

        dishDiv.innerHTML = `
            <img src="${imgSrc}" alt="${dish.name}" style="width: 150px; height: 100px; object-fit: cover; border-radius: 5px;">
            <h3>${dish.name}</h3>
            <p>Цена: ${dish.price} руб.</p>
            <p>${dish.description}</p>
        `;

        menuDiv.appendChild(dishDiv);
    });

    content.appendChild(menuDiv);
}