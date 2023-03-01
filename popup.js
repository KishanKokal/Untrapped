console.log('Popup.js is working');
const homeFeed = document.getElementById('homeFeed');
const recommendedVideos = document.getElementById('recommendedVideos');

homeFeed.addEventListener('change', function(event){
    if (this.checked) {
        console.log('homeFeed is checked');
    }
    else {
        console.log('homeFeed is unchecked');
    }
});

recommendedVideos.addEventListener('change', function(event){
    if (this.checked) {
        console.log('recommendedVideos is checked');
    }
    else {
        console.log('recommendedVideos is unchecked');
    }
});