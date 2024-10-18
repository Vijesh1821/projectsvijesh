let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Show the first image
slides[currentIndex].classList.add('active');

// Change slides every 3 seconds
setInterval(() => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');
}, 3000);
document.getElementById('get-started').addEventListener('click',function() {
    window.open("https://editkaro.in/")
});
document.getElementById('linkedin').addEventListener('click',function() {
    window.open("https://www.linkedin.com/in/vijesh-amtoor-a34658261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
});
document.getElementById('click-here').addEventListener('click',function() {
    window.open("https://editkaro.in/")
});
const videos = document.querySelectorAll('video');

// Add event listeners to each video to play on hover and pause on mouse leave
videos.forEach(video => {
    // Play video when mouse enters the video element
    video.addEventListener('mouseover', function() {
        video.play();
    });

    // Pause video when mouse leaves the video element
    video.addEventListener('mouseout', function() {
        video.pause();
    });
});