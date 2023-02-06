console.log('Hello, this is background script running!');

chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let message = {
        text: 'hello'
    }
    chrome.tabs.sendMessage(tab.id, message)
}