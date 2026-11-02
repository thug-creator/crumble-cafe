export function loadHome() {
    const content = document.getElementById('content');

    const homeDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Добро пожаловать в Crumble Cafe!,';

    const description = document.createElement('p')
    description.textContent = 'Лучшая выпечка в городе, приготовленная с любовью!';

    homeDiv.appendChild(headline);
    homeDiv.appendChild(description);

    content.appendChild(homeDiv);
}