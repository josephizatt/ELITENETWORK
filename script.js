function getRandomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function animateBackgroundImages() {
  const images = document.querySelectorAll('.background-images img');
  const totalImages = images.length;
  
  let delay = 0;
  let zIndex = 1;

  images.forEach((img) => {
    const minDelay = 0;
    const maxDelay = 3000;
    const minTranslate = -500;
    const maxTranslate = 500;

    img.style.animationDelay = `${delay}ms`;
    img.style.zIndex = zIndex;

    const translateX = getRandomPosition(minTranslate, maxTranslate);
    const translateY = getRandomPosition(minTranslate, maxTranslate);

    img.style.transform = `translate(${translateX}px, ${translateY}px)`;
    
    delay += getRandomPosition(minDelay, maxDelay);
    zIndex++;

    img.addEventListener('animationiteration', () => {
      const newTranslateX = getRandomPosition(minTranslate, maxTranslate);
      const newTranslateY = getRandomPosition(minTranslate, maxTranslate);
      img.style.transform = `translate(${newTranslateX}px, ${newTranslateY}px)`;
    });
  });
}

animateBackgroundImages();
