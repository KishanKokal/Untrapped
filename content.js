let item, item2, item3, item4, item5, related, homeFeed, scrollContainer, homeFeedIronSelector, youtubeLogo, shorts, commentSection, liveChat;
async function doSomething() {
    item = await chrome.storage.sync.get(['homeFeed']);
    item2 = await chrome.storage.sync.get(['recommendedVideos']);
    item3 = await chrome.storage.sync.get(['shorts']);
    item4 = await chrome.storage.sync.get(['commentSection']);
    item5 = await chrome.storage.sync.get(['liveChat']);
}
doSomething();

youtubeLogo = document.getElementById('logo-icon');
youtubeLogo.addEventListener("click", () => {
    window.location = 'https://www.youtube.com/';
});

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
        scrollContainer = document.getElementById('chips-wrapper');
        homeFeed.style['display'] = 'none';
        scrollContainer.style['display'] = 'none';
    }

    else if (message === 'showHomeFeed') {
        homeFeed = document.getElementById('contents');
        scrollContainer = document.getElementById('chips-wrapper');
        homeFeed.style['display'] = '';
        scrollContainer.style['display'] = '';
    }

    else if (message === 'hideShorts') {
        shorts = document.querySelector("[title='Shorts']");
        shorts.style['display'] = 'none';
    }

    else if (message === 'showShorts') {
        shorts = document.querySelector("[title='Shorts']");
        shorts.style['display'] = '';
    }

    else if (message == 'showCommentSection') {
        commentSection = document.getElementById('comments');
        commentSection.style['display'] = '';
    }

    else if (message == 'hideCommentSection') {
        commentSection = document.getElementById('comments');
        commentSection.style['display'] = 'none';
    }

    else if (message == 'hideLiveChat') {
        liveChat = document.getElementById('chat');
        liveChat.style['display'] = 'none';
    }

    else if (message == 'showLiveChat') {
        liveChat = document.getElementById('chat');
        liveChat.style['display'] = '';
    }

    else if (message === 'hello') {
        await doSomething();
        // declaring variables to store each element
        related = document.getElementById('related');
        homeFeed = document.getElementById('contents');
        scrollContainer = document.getElementById('chips-wrapper');
        youtubeLogo = document.querySelector('#logo-icon');
        shorts = document.querySelector("[title='Shorts']");
        commentSection = document.getElementById('comments');
        liveChat = document.getElementById('chat');

        // check if the page has a homefeed
        if (item && item.homeFeed && homeFeed !== null) {
            // set the visibility of home page to hidden
            console.log('------------------');
            console.log(item);
            homeFeed.style['display'] = 'none';
            console.log("Home feed is now disappeared");
            homeFeed = null;
        }

        if (item && item.homeFeed && scrollContainer !== null) {
            // set the display property of scroll container to none
            scrollContainer.style['display'] = 'none';
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

        if (item4 && item4.commentSection && commentSection !== null) {
            liveChat.style['display'] = 'none';
            liveChat = null;
        }

        if (item5 && item5.liveChat && commentSection !== null) {
            liveChat.style['display'] = 'none';
            liveChat = null;
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