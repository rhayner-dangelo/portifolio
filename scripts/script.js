document.addEventListener("DOMContentLoaded", function() {
    const loadingBar = document.querySelector('.barra');
    const percentageText = document.querySelector('.percentage');

   
    const desiredPercentage = 12.5; 


    function updateProgress() {
        
        const containerWidth = loadingBar.parentElement.offsetWidth;
        const targetWidth = (desiredPercentage / 100) * containerWidth;

      
        loadingBar.style.width = `${desiredPercentage}%`;
        percentageText.textContent = `${desiredPercentage}%`;
    }

   
    updateProgress();
});
