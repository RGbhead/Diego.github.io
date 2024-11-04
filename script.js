document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: "1984", author: "Джордж Оруэлл", cover: "https://yastatic.net/naydex/yandex-search/gxh6yd374/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlrpdkdVbM6Vc-YMVW5uZLsVF1_31pklBkP6IMwj0CDNgyua0DSPp4x_jHe4ZavYJfwNC" },
        { title: "Гордость и предубеждение", author: "Джейн Остин", cover: "https://yastatic.net/naydex/yandex-search/gxh6yd374/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlrpdlt1cN6Zc-YweW5CSK8FH1_31pklBkP6IMwj0CDNgyua0DSPp4x_jHe4ZavYJfwNC" },
        { title: "Убить пересмешника", author: "Харпер Ли", cover: "https://yastatic.net/naydex/yandex-search/gxh6yd374/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlrlamt5bMaBc-YweW5OYKsJC1_31pklBkP6IMwj0CDNgyua0DSPp4x_jHe4ZavYJfwNC" },
        { title: "Великий Гэтсби", author: "Ф. Скотт Фицджеральд", cover: "https://yastatic.net/naydex/yandex-search/gxh6yd374/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlrpZmt1eM69c-YwfWZKTKsJE1_31pklBkP6IMwj0CDNgyua0DSPp4x_jHe4ZavYJfwNC" },
        { title: "Гарри Поттер и философский камень", author: "Дж. К. Роулинг", cover: "img/harrypoter.jpg" },
        { title: "Война и мир", author: "Лев Толстой", cover: "https://yastatic.net/naydex/yandex-search/gxh6yd374/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlrlUldlRNKFc-Y0fXJObLcVC1_31pklBkP6IMwj0CDNgyua0DSPp4x_jHe4ZavYJfwNC" }
    ];

    const bookGrid = document.getElementById('bookGrid');

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
            </div>
        `;
        bookGrid.appendChild(bookCard);
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        contactForm.reset();
    });

    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});