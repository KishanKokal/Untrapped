console.log('Hello, this is background script running!');

chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log("Button Clicked!");
    let message = {
        text: 'hello'
    }
    chrome.tabs.sendMessage(tab.id, message)
}