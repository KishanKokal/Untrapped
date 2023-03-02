console.log('Popup.js is working');
// const homeFeed = document.getElementById('homeFeed');
// const recommendedVideos = document.getElementById('recommendedVideos');

async function doSomething() {
    const item = await chrome.storage.sync.get(['homeFeed']);
    const item2 = await chrome.storage.sync.get(['recommendedVideos']);
    const item3 = await chrome.storage.sync.get(['shorts']);
    document.getElementById('homeFeed').checked = item.homeFeed;
    document.getElementById('recommendedVideos').checked = item2.recommendedVideos;
    document.getElementById('shorts').checked = item3.shorts;
}

homeFeed.addEventListener('change', function(event){
    if (this.checked) {
        console.log('homeFeed is checked');
        chrome.storage.sync.set({homeFeed: true})
    }
    else {
        console.log('homeFeed is unchecked');
        chrome.storage.sync.set({homeFeed: false})
    }
});

recommendedVideos.addEventListener('change', function(event){
    if (this.checked) {
        console.log('recommendedVideos is checked');
        chrome.storage.sync.set({recommendedVideos: true})
    }
    else {
        console.log('recommendedVideos is unchecked');
        chrome.storage.sync.set({recommendedVideos: false})
    }
});

shorts.addEventListener('change', function(event){
    if (this.checked) {
        console.log('recommendedVideos is checked');
        chrome.storage.sync.set({shorts: true})
    }
    else {
        console.log('recommendedVideos is unchecked');
        chrome.storage.sync.set({shorts: false})
    }
});

doSomething();