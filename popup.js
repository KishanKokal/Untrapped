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
            await chrome.tabs.update(undefined, { url: tabs[0].url });
        });

        setTimeout(() => {
            chrome.tabs.reload();
        }, 200);
    }
    else {
        console.log('homeFeed is unchecked');
        chrome.storage.sync.set({homeFeed: false})

        // Syncing changes
        let my_tabid;
        
        chrome.tabs.query({currentWindow: true, active: true}, async function(tabs){
            console.log(tabs[0].url);
            my_tabid = await tabs[0].id;
            await chrome.tabs.update(undefined, { url: tabs[0].url });
        });

        setTimeout(() => {
            chrome.tabs.reload();
        }, 200);
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
            await chrome.tabs.update(undefined, { url: tabs[0].url });
        });

        setTimeout(() => {
            chrome.tabs.reload();
        }, 200);
    }
    else {
        console.log('recommendedVideos is unchecked');
        chrome.storage.sync.set({recommendedVideos: false})

        // Syncing changes
        let my_tabid;
        
        chrome.tabs.query({currentWindow: true, active: true}, async function(tabs){
            console.log(tabs[0].url);
            my_tabid = await tabs[0].id;
            await chrome.tabs.update(undefined, { url: tabs[0].url });
        });

        setTimeout(() => {
            chrome.tabs.reload();
        }, 200);
    }
});

shorts.addEventListener('change', function(event){
    if (this.checked) {
        console.log('recommendedVideos is checked');
        chrome.storage.sync.set({shorts: true})

        // Syncing changes
        let my_tabid;
        
        chrome.tabs.query({currentWindow: true, active: true}, async function(tabs){
            console.log(tabs[0].url);
            my_tabid = await tabs[0].id;
            await chrome.tabs.update(undefined, { url: tabs[0].url });
        });

        setTimeout(() => {
            chrome.tabs.reload();
        }, 200);
    }
    else {
        console.log('recommendedVideos is unchecked');
        chrome.storage.sync.set({shorts: false})

        // Syncing changes
        let my_tabid;
        
        chrome.tabs.query({currentWindow: true, active: true}, async function(tabs){
            console.log(tabs[0].url);
            my_tabid = await tabs[0].id;
            await chrome.tabs.update(undefined, { url: tabs[0].url });
        });

        setTimeout(() => {
            chrome.tabs.reload();
        }, 200);
    }
});

doSomething();