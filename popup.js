console.log('Popup.js is working');
const homeFeed = document.getElementById('homeFeed');
const recommendedVideos = document.getElementById('recommendedVideos');

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

        // Syncing changes
        let my_tabid;
    
        chrome.tabs.query({currentWindow: true, active: true}, async function(tabs){
            console.log(tabs[0].url);
            my_tabid = await tabs[0].id;
            if (!tabs[0].url.includes('youtube.com/watch') && !tabs[0].url.includes('videos')) {
                let message = {
                    text: 'hideHomeFeed'
                };
                await chrome.tabs.sendMessage(my_tabid, message);
            }
        });
    }
    else {
        console.log('homeFeed is unchecked');
        chrome.storage.sync.set({homeFeed: false})

        // Syncing changes
        let my_tabid;
        
        chrome.tabs.query({currentWindow: true, active: true}, async function(tabs){
            console.log(tabs[0].url);
            my_tabid = await tabs[0].id;
            if (!tabs[0].url.includes('youtube.com/watch') && !tabs[0].url.includes('videos')) {
                let message = {
                    text: 'showHomeFeed'
                };
                await chrome.tabs.sendMessage(my_tabid, message);
            }
        });
    }
});

recommendedVideos.addEventListener('change', function(event){
    if (this.checked) {
        console.log('recommendedVideos is checked');
        chrome.storage.sync.set({recommendedVideos: true})

        // Syncing changes
        let my_tabid;
        
        chrome.tabs.query({currentWindow: true, active: true}, async function(tabs){
            console.log(tabs[0].url);
            my_tabid = await tabs[0].id;
            if (tabs[0].url.includes('youtube.com/watch')) {
                let message = {
                    text: 'hideRecommendedVideos'
                };
                await chrome.tabs.sendMessage(my_tabid, message);
            }
        });
    }
    else {
        console.log('recommendedVideos is unchecked');
        chrome.storage.sync.set({recommendedVideos: false})

        // Syncing changes
        let my_tabid;
        
        chrome.tabs.query({currentWindow: true, active: true}, async function(tabs){
            console.log(tabs[0].url);
            my_tabid = await tabs[0].id;
            if (tabs[0].url.includes('youtube.com/watch')) {
                let message = {
                    text: 'showRecommendedVideos'
                };
                await chrome.tabs.sendMessage(my_tabid, message);
            }
        });

    }
});

shorts.addEventListener('change', function(event){
    if (this.checked) {
        console.log('Shorts is checked');
        chrome.storage.sync.set({shorts: true})

        // Syncing changes
        let my_tabid;
        
        chrome.tabs.query({currentWindow: true, active: true}, async function(tabs){
            console.log(tabs[0].url);
            my_tabid = await tabs[0].id;
            if (!tabs[0].url.includes('youtube.com/watch')) {
                let message = {
                    text: 'hideShorts'
                };
                await chrome.tabs.sendMessage(my_tabid, message);
            }
        });

    }
    else {
        console.log('Shorts is unchecked');
        chrome.storage.sync.set({shorts: false})

        // Syncing changes
        let my_tabid;
        
        chrome.tabs.query({currentWindow: true, active: true}, async function(tabs){
            console.log(tabs[0].url);
            my_tabid = await tabs[0].id;
            if (!tabs[0].url.includes('youtube.com/watch')) {
                let message = {
                    text: 'showShorts'
                };
                await chrome.tabs.sendMessage(my_tabid, message);
            }
        });

    }
});

doSomething();