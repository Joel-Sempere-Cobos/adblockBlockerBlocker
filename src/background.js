chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ['src/adblockUnblocker.js'],
      })
      .then(() => {
        console.log('INJECTED THE FOREGROUND SCRIPT.');
      })
      .catch((err) => console.log(err));
  }
});
