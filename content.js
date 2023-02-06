// Wait for 3 seconds to load the page
setTimeout(function (){

    // declaring variables to store each element
    let videoSideBar = document.getElementById('secondary');
    let homeFeed = document.querySelector('div#contents.style-scope.ytd-rich-grid-renderer');

    // check if the page has a side bar
    if (videoSideBar) {
        // set the visibility of side bar to hidden
        videoSideBar.style['visibility'] = 'hidden';
        console.log("Side Bar is now disappeared");
    }

    // check if the page has a home page
    if (homeFeed) {
        // set the visibility of home page to hidden
        homeFeed.style['visibility'] = 'hidden';
        console.log("Home feed is now disappeared")
    }

}, 3000);