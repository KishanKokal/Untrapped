console.log("Hello, this is background script running!");
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.includes("youtube.com")
  ) {
    console.log("YT video page loaded!");
    setTimeout(() => {
      callContent(tabId);
    }, 800);
  }
});

function callContent(tabId) {
  console.log("Button Clicked!");
  let message = {
    text: "hello",
  };
  chrome.tabs.sendMessage(tabId, message);
}
