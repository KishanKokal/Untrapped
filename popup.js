console.log("Popup.js is working");
const homeFeed = document.getElementById("homeFeed");
const recommendedVideos = document.getElementById("recommendedVideos");
const commentSection = document.getElementById("commentSection");
const liveChat = document.getElementById("liveChat");
const ad = document.getElementById("ad");

async function doSomething() {
  const item = await chrome.storage.sync.get(["homeFeed"]);
  const item2 = await chrome.storage.sync.get(["recommendedVideos"]);
  const item3 = await chrome.storage.sync.get(["shorts"]);
  const item4 = await chrome.storage.sync.get(["commentSection"]);
  const item5 = await chrome.storage.sync.get(["liveChat"]);
  const item6 = await chrome.storage.sync.get(["ad"]);
  document.getElementById("homeFeed").checked = item.homeFeed;
  document.getElementById("recommendedVideos").checked =
    item2.recommendedVideos;
  document.getElementById("shorts").checked = item3.shorts;
  document.getElementById("commentSection").checked = item4.commentSection;
  document.getElementById("liveChat").checked = item5.liveChat;
  document.getElementById("ad").checked = item6.ad;
}

homeFeed.addEventListener("change", function (event) {
  if (this.checked) {
    console.log("homeFeed is checked");
    chrome.storage.sync.set({ homeFeed: true });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        console.log(tabs[0].url);
        my_tabid = await tabs[0].id;
        if (
          !tabs[0].url.includes("youtube.com/watch") &&
          !tabs[0].url.includes("videos")
        ) {
          let message = {
            text: "hideHomeFeed",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  } else {
    console.log("homeFeed is unchecked");
    chrome.storage.sync.set({ homeFeed: false });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        console.log(tabs[0].url);
        my_tabid = await tabs[0].id;
        if (
          !tabs[0].url.includes("youtube.com/watch") &&
          !tabs[0].url.includes("videos")
        ) {
          let message = {
            text: "showHomeFeed",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  }
});

ad.addEventListener("change", function (event) {
  if (this.checked) {
    console.log("ad banner is checked");
    chrome.storage.sync.set({ ad: true });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        console.log(tabs[0].url);
        my_tabid = await tabs[0].id;
        if (
          !tabs[0].url.includes("youtube.com/watch") &&
          !tabs[0].url.includes("videos")
        ) {
          let message = {
            text: "hideAd",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  } else {
    console.log("ad banner is unchecked");
    chrome.storage.sync.set({ ad: false });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        console.log(tabs[0].url);
        my_tabid = await tabs[0].id;
        if (
          !tabs[0].url.includes("youtube.com/watch") &&
          !tabs[0].url.includes("videos")
        ) {
          let message = {
            text: "showAd",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  }
});

recommendedVideos.addEventListener("change", function (event) {
  if (this.checked) {
    console.log("recommendedVideos is checked");
    chrome.storage.sync.set({ recommendedVideos: true });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        console.log(tabs[0].url);
        my_tabid = await tabs[0].id;
        if (tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "hideRecommendedVideos",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  } else {
    console.log("recommendedVideos is unchecked");
    chrome.storage.sync.set({ recommendedVideos: false });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        console.log(tabs[0].url);
        my_tabid = await tabs[0].id;
        if (tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "showRecommendedVideos",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  }
});

commentSection.addEventListener("change", function (event) {
  if (this.checked) {
    console.log("commentSection is checked");
    chrome.storage.sync.set({ commentSection: true });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        console.log(tabs[0].url);
        my_tabid = await tabs[0].id;
        if (tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "hideCommentSection",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  } else {
    console.log("commentSection is unchecked");
    chrome.storage.sync.set({ commentSection: false });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        console.log(tabs[0].url);
        my_tabid = await tabs[0].id;
        if (tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "showCommentSection",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  }
});

liveChat.addEventListener("change", function (event) {
  if (this.checked) {
    console.log("liveChat is checked");
    chrome.storage.sync.set({ liveChat: true });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        console.log(tabs[0].url);
        my_tabid = await tabs[0].id;
        if (tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "hideLiveChat",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  } else {
    console.log("liveChat is unchecked");
    chrome.storage.sync.set({ liveChat: false });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        console.log(tabs[0].url);
        my_tabid = await tabs[0].id;
        if (tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "showLiveChat",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  }
});

shorts.addEventListener("change", function (event) {
  if (this.checked) {
    console.log("Shorts is checked");
    chrome.storage.sync.set({ shorts: true });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        console.log(tabs[0].url);
        my_tabid = await tabs[0].id;
        if (!tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "hideShorts",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  } else {
    console.log("Shorts is unchecked");
    chrome.storage.sync.set({ shorts: false });

    // Syncing changes
    let my_tabid;

    chrome.tabs.query(
      { currentWindow: true, active: true },
      async function (tabs) {
        console.log(tabs[0].url);
        my_tabid = await tabs[0].id;
        if (!tabs[0].url.includes("youtube.com/watch")) {
          let message = {
            text: "showShorts",
          };
          await chrome.tabs.sendMessage(my_tabid, message);
        }
      }
    );
  }
});

doSomething();
