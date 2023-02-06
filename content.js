chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
    if (message.text === 'hello') {
        // declaring variables to store each element
        let videoSideBar = document.getElementsByTagName('ytd-watch-next-secondary-results-renderer');
        let homeFeed = document.querySelector('div#contents.style-scope.ytd-rich-grid-renderer');

        // check if the page has a side bar
        if (videoSideBar) {
            // set the visibility of side bar to hidden
            videoSideBar[0].style['visibility'] = 'hidden';
            console.log("Side Bar is now disappeared");
            videoSideBar = false;
        }

        // check if the page has a home page
        if (homeFeed) {
            // set the visibility of home page to hidden
            homeFeed.style['visibility'] = 'hidden';
            console.log("Home feed is now disappeared")
            homeFeed = false;
        }
    }
}
    