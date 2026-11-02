export function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Наши Контакты';

    const address = document.createElement('p');
    address.textContent = '📍 Адрес: г. Москва, ул. Пушкина, д. 10';

    const phone = document.createElement('p');
    phone.textContent = '📞 Телефон: +7 (999) 123-45-67';

    const hours = document.createElement('p');
    hours.textContent = '🕒 Режим работы: Ежедневно с 08:00 до 22:00';

    contactDiv.appendChild(headline);
    contactDiv.appendChild(address);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(hours);

    // --- Задание 2.3: Кнопка бронирования ---
    const bookBtn = document.createElement('button');
    bookBtn.textContent = 'Забронировать столик';
    bookBtn.style.marginTop = '20px';
    bookBtn.style.marginBottom = '30px';
    bookBtn.onclick = () => {
        alert('Столик забронирован! Мы вам перезвоним.');
    };
    contactDiv.appendChild(bookBtn);

    // --- Задание 3.1: Форма обратной связи ---
    const form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.maxWidth = '300px';
    form.style.gap = '10px';

    // Поле Имя
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Ваше имя (мин. 2 символа)';
    nameInput.required = true;

    // Поле Email
    const emailInput = document.createElement('input');
    emailInput.type = 'text'; // используем text, чтобы браузер не блокировал нашу валидацию
    emailInput.placeholder = 'Ваш Email';

    // Поле Сообщение
    const messageInput = document.createElement('textarea');
    messageInput.placeholder = 'Ваше сообщение';
    messageInput.rows = 3;

    // Кнопка отправки
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Отправить';

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageInput);
    form.appendChild(submitBtn);

    // Логика валидации
    form.onsubmit = (e) => {
        e.preventDefault(); // Останавливаем перезагрузку страницы

        // Сброс стилей
        nameInput.style.borderColor = '';
        emailInput.style.borderColor = '';

        let isValid = true;
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();

        // Проверка имени (минимум 2 символа)
        if (nameValue.length < 2) {
            nameInput.style.borderColor = 'red';
            isValid = false;
        }

        // Проверка Email через регулярное выражение
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            emailInput.style.borderColor = 'red';
            isValid = false;
        }

        if (isValid) {
            alert('Спасибо, ' + nameValue + '!');
            form.reset(); // Очищаем форму
        }
    };

    contactDiv.appendChild(form);
    content.appendChild(contactDiv);
}