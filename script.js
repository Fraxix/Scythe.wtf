document.addEventListener('DOMContentLoaded', () => {
    const cardData = [
        {
            imgElementId: 'project-img-1',
            linkElementId: 'image-link-1',
            images: ['img.jpg', '2.png', '3.jpg']
        },
        {
            imgElementId: 'project-img-2',
            linkElementId: 'image-link-2',
            images: ['img.jpg', '2.png', '3.jpg']
        }
        // Add more card data as needed
    ];

    cardData.forEach(card => {
        let currentIndex = 0;
        const imgElement = document.getElementById(card.imgElementId);
        const imageLink = document.getElementById(card.linkElementId);
        
        const updateImage = (index) => {
            imgElement.src = card.images[index];
            imageLink.href = card.images[index];
        };

        document.querySelector(`.left-arrow`).addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : card.images.length - 1;
            updateImage(currentIndex);
        });

        document.querySelector(`.right-arrow`).addEventListener('click', () => {
            currentIndex = (currentIndex < card.images.length - 1) ? currentIndex + 1 : 0;
            updateImage(currentIndex);
        });
    });
});
const translations = {
    en: {
        Title: "Welcome to the website!",
        description: "This is a sample description.",
        Card1Desc: "A fully universal internal DX11 base w/ ImGui",
        ViewGithubButton: "View Github"
    },
    ru: {
        Title: "Добро пожаловать на сайт!",
        description: "Это пример описания.",
         Card1Desc: "Полностью универсальная внутренняя база DX11 с ImGui.",
         ViewGithubButton: "Посмотреть Гитхаб"
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

