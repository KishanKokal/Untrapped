chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.includes("youtube.com")
  ) {
    setTimeout(() => {
      callContent(tabId);
    }, 800);
  }
});

function callContent(tabId) {
  let message = {
    text: "hello",
  };
  chrome.tabs.sendMessage(tabId, message);
}
