let item, item2;
async function doSomething() {
    item = await chrome.storage.sync.get(['homeFeed']);
    item2 = await chrome.storage.sync.get(['recommendedVideos']);
}
doSomething();

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log("got message called");
    performAction(message.text);
}

async function performAction(message) {
    console.log("Perform action called!");
    if (message === 'hello') {
        await doSomething();
        // declaring variables to store each element
        let related = document.getElementById('related')
        let homeFeed = document.getElementById('contents');
        let homeFeedIronSelector = document.querySelector("#chips.ytd-feed-filter-chip-bar-renderer");
        let youtubeLogo = document.querySelector('#logo-icon');

        // check if the page has a homefeed
        if (item && item.homeFeed && homeFeed !== null) {
            // set the visibility of home page to hidden
            console.log('------------------');
            console.log(item);
            homeFeed.style['display'] = 'none';
            console.log("Home feed is now disappeared")
            homeFeed = null;
        }

        // check if the page has homeFeedIronSelector
        if (item && item.homeFeed && homeFeedIronSelector !== null) {
            // set the visibility of home page to hidden
            homeFeedIronSelector.style['visibility'] = 'hidden';
            console.log("Home feed iron selector is now disappeared")
            homeFeedIronSelector = null;
        }

        if (youtubeLogo !== null) {
            youtubeLogo.innerHTML = '<img src = "https://raw.githubusercontent.com/KishanKokal/Untrapped/89f2281ee2f6f936d9eb831d065ab436cd785675/untrapped.svg" width = "100px"></img>';
            console.log("The YouTube logo has been changed");
            youtubeLogo = null;
        }

        // check if the page has a side bar
        if (item2 && item2.recommendedVideos && related !== null) {
            // set the visibility of side bar to hidden
            related.style.color="white";
            related.innerHTML = '<h1>"Concentrate all your thoughts upon the work in hand. The sun\'s rays do not burn until brought to a focus." - Alexander Graham Bell</h1>';
            console.log("Related feed is now disappeared");
        }
    }
}

performAction('hello');