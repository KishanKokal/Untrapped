chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {

    console.log("got message called");
    performAction(message.text);

}

function performAction(message) {
    console.log("Perform action called!");
    if (message === 'hello') {
        // declaring variables to store each element
        let videoSideBar = document.getElementsByTagName('ytd-watch-next-secondary-results-renderer');
        let adsSection = document.getElementById('companion');
        let homeFeed = document.getElementById('contents');
        let homeFeedIronSelector = document.querySelector("#chips.ytd-feed-filter-chip-bar-renderer");
        let youtubeLogo = document.querySelector('#logo-icon');

        // check if the page has a homefeed
        if (homeFeed !== undefined) {
            // set the visibility of home page to hidden
            homeFeed.style['display'] = 'none';
            console.log("Home feed is now disappeared")
            homeFeed = undefined;
        }

        // check if the page has homeFeedIronSelector
        if (homeFeedIronSelector !== undefined) {
            // set the visibility of home page to hidden
            homeFeedIronSelector.style['visibility'] = 'hidden';
            console.log("Home feed iron selector is now disappeared")
            homeFeedIronSelector = undefined;
        }

        if (youtubeLogo !== undefined) {
            youtubeLogo.innerHTML = '<img src = "https://raw.githubusercontent.com/KishanKokal/Untrapped/a47dc370e9491f3f40aaa81ec8188db166709ee7/untrapped.svg" width = "100px"></img>';
            console.log("The YouTube logo has been changed");
            youtubeLogo = undefined;
        }

        // check if the page has a side bar
        if (videoSideBar !== undefined) {
            // set the visibility of side bar to hidden
            videoSideBar[0].style['visibility'] = 'hidden';
            console.log("Side Bar is now disappeared");
            videoSideBar = undefined;
        }

        // check if the page has a ads sectio
        if (adsSection !== undefined) {
            // set the visibility of the ads section to hidden
            adsSection.style['visibility'] = 'hidden';
            console.log("Ads section is now removed");
            adsSection = undefined;
        }
    }
}

performAction('hello');