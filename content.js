let item, item2, item3, related, homeFeed, scrollContainer, homeFeedIronSelector, youtubeLogo, shorts;
async function doSomething() {
    item = await chrome.storage.sync.get(['homeFeed']);
    item2 = await chrome.storage.sync.get(['recommendedVideos']);
    item3 = await chrome.storage.sync.get(['shorts']);
}
doSomething();

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log("got message called");
    performAction(message.text);
}

async function performAction(message) {
    console.log("Perform action called!");

    if (message === 'hideRecommendedVideos') {
        related = document.getElementById('related');
        related.style['visibility'] = 'hidden';
    }

    else if (message === 'showRecommendedVideos') {
        related = document.getElementById('related');
        related.style['visibility'] = 'visible';
    }

    else if (message === 'hideHomeFeed') {
        homeFeed = document.getElementById('contents');
        scrollContainer = document.getElementById('scroll-container');
        homeFeed.style['visibility'] = 'hidden';
        scrollContainer.style['visibility'] = 'hidden';
    }

    else if (message === 'showHomeFeed') {
        homeFeed = document.getElementById('contents');
        scrollContainer = document.getElementById('scroll-container');
        homeFeed.style['visibility'] = 'visible';
        scrollContainer.style['visibility'] = 'visible';
    }

    else if (message === 'hideShorts') {
        shorts = document.querySelector("[title='Shorts']");
        shorts.style['display'] = 'none';
    }
    else if (message === 'showShorts') {
        shorts = document.querySelector("[title='Shorts']");
        shorts.style['display'] = 'flex';
    }
    
    else if (message === 'hello') {
        await doSomething();
        // declaring variables to store each element
        related = document.getElementById('related');
        homeFeed = document.getElementById('contents');
        scrollContainer = document.getElementById('scroll-container');
        // homeFeedIronSelector = document.getElementById('primary');
        youtubeLogo = document.querySelector('#logo-icon');
        shorts = document.querySelector("[title='Shorts']");

        // check if the page has a homefeed
        if (item && item.homeFeed && homeFeed !== null) {
            // set the visibility of home page to hidden
            console.log('------------------');
            console.log(item);
            homeFeed.style['visibility'] = 'hidden';
            console.log("Home feed is now disappeared");
            homeFeed = null;
        }

        if (item && item.homeFeed && scrollContainer !== null) {
            // set the display property of scroll container to none
            scrollContainer.style['visibility'] = 'hidden';
            console.log('Scroll container is now disappeared');
            scrollContainer = null;
        }

        if (youtubeLogo !== null) {
            youtubeLogo.innerHTML = '<img src = "https://raw.githubusercontent.com/KishanKokal/Untrapped/89f2281ee2f6f936d9eb831d065ab436cd785675/untrapped.svg" width = "100px"></img>';
            console.log("The YouTube logo has been changed");
            youtubeLogo = null;
        }

        // check if the page has a side bar
        if (item2 && item2.recommendedVideos && related !== null) {
            // set the visibility of side bar to hidden
            related.style['visibility'] = 'hidden';
            related = null;
        }

        if (item3 && item3.shorts && shorts !== null) {
            // set the visibility of side bar to hidden
            shorts.style['display'] = 'none';
            console.log("Shorts tab is now disappeared");
            shorts = null;
        }
    }
}

performAction('hello');