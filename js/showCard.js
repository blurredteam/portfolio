    let currentCardIndex = 0;
    const backImages = ['./assets/img/targetas/1.png', './assets/img/targetas/2.png', './assets/img/targetas/3.png', './assets/img/targetas/4.png', './assets/img/targetas/5.png', './assets/img/targetas/6.png']; // Replace with your image URLs
    const frontImages  = ['./assets/img/targetas/1-1.png', './assets/img/targetas/2-1.png', './assets/img/targetas/3-1.png', './assets/img/targetas/4-1.png', './assets/img/targetas/5-1.png', './assets/img/targetas/6-1.png']; // Replace with your image URLs
    
    function showCard(direction) {
        if (direction === 'next') {
            currentCardIndex = (currentCardIndex + 1) % frontImages.length;
        } else if (direction === 'prev') {
            currentCardIndex = (currentCardIndex - 1 + frontImages.length) % frontImages.length;
        }
        
        const frontImage = document.querySelector('.flip-card-front img');
        const backImage = document.querySelector('.flip-card-back img');
        
        frontImage.src = frontImages[currentCardIndex];
        backImage.src = backImages[currentCardIndex];
    }