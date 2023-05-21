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
      image.style.transform = `translateY(${index * 100}%)`;
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
        const currentTranslateY = parseFloat(image.style.transform.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g)[0]);
        image.style.transform = `translateY(${(currentTranslateY - 2) % (totalImages * 100)}%)`;
      });
    }, 50); // Adjust this value to control the speed of scrolling
  }
  
  createBackgroundImages();
  