const translations = {
    en: {
        Message: "Website under construction!"
    },
    ru: {
          Message: "Сайт в разработке!"
    }
};

function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}