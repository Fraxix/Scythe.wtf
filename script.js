document.addEventListener('DOMContentLoaded', () => {
    const cardData = [
        {
            imgElementId: 'project-img-1',
            linkElementId: 'image-link-1',
            images: ['Images/img.jpg', 'Images/2.png', 'Images/3.jpg']
        },
        {
            imgElementId: 'project-img-2',
            linkElementId: 'image-link-2',
            images: ['Images/pfp.gif']
        }
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


