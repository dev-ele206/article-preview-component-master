const shareBtn = document.getElementById('share-icon');
const shareLinks = document.querySelector('.share-links');

shareBtn.addEventListener('click', function() {
    shareLinks.parentElement.classList.toggle('active');
})