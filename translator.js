const translations = {
    en: {
        Title: "Welcome to the website!",
        description: "This is a sample description.",
        Card1Desc: "A fully universal internal DX11 base w/ ImGui",
        ViewGithubButton: "View Github",
        Card2Desc: "Literally this site. Although still under construction",
        Message: "Website under construction!"
    },
    ru: {
        Title: "Добро пожаловать на сайт!",
        description: "Это пример описания.",
         Card1Desc: "Полностью универсальная внутренняя база DX11 с ImGui.",
         ViewGithubButton: "Посмотреть Гитхаб",
         Card2Desc: "Буквально этот сайт. Хотя еще в стадии строительства",
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