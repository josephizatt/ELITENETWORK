function getRandomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBackgroundImages() {
    const container = document.querySelector('.background-images');
    let images = Array.from(container.querySelectorAll('img'));
    const totalImages = images.length;

    shuffleArray(images);

    images.forEach((image, index) => {
        image.style.zIndex = index;
        image.style.left = `${getRandomPosition(0, 90)}%`;
        image.style.top = `${index * 75}%`;  // Decreased distance between images
    });

    setInterval(() => {
        const randomIndex = getRandomPosition(0, totalImages - 1);
        const image = images[randomIndex];

        image.style.zIndex = totalImages;
        images.forEach((img) => {
            if (img !== image && img.style.zIndex > 0) {
                img.style.zIndex = img.style.zIndex - 1;
            }
        });
    }, 5000);

    setInterval(() => {
        images.forEach((image) => {
            const currentTranslateY = parseFloat(image.style.top.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g)[0]);
            image.style.top = `${(currentTranslateY - 0.3) % (totalImages * 100)}%`;  // Increased scrolling speed
        });
    }, 10);

    window.addEventListener('wheel', function(e) {
        const delta = Math.sign(e.deltaY);
        images.forEach((image) => {
            const currentTranslateY = parseFloat(image.style.top.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g)[0]);
            image.style.top = `${(currentTranslateY - delta * 0.5) % (totalImages * 100)}%`;  // Increased scrolling speed on mouse wheel event

            // Add hue rotation effect
            image.style.filter = `hue-rotate(${getRandomPosition(0, 360)}deg)`;
        });
    });
}

createBackgroundImages();
