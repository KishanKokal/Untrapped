console.log('Hello, this is background script running!');

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url  && tab.url.includes('youtube.com')) {
        console.log('YT video page loaded!');
        callContent(tabId);
    }
});

function callContent(tabId) {
    console.log("Button Clicked!");
    let message = {
        text: 'hello'
    };
    chrome.tabs.sendMessage(tabId, message);
}