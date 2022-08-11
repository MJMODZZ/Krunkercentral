(function () {
  // Change this URL every update so your RPM doesn't go down because of multiple links for same resource
  // U could make it download this link from the server so you can change it without updating
  const keyUrl = 'https://krunker.io/?gvmouirhw98osih5g98o3ewfe4f1';

  // Messaging between content script for license and settings
  chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    switch (message.text) {
      case 'getSettings':
        if (!('gpusttngs' in localStorage) || localStorage.gpusttngs === 'undefined') {
          localStorage.gpusttngs = JSON.stringify({});
        }
        sendResponse({ text: localStorage.gpusttngs });
        break;
      case 'setSettings':
        localStorage.gpusttngs = message.data;
        break;
      // case "license":
      //     sendResponse({licensed: localStorage.licensed})
      //     break

      // This way you can change the linkvertise link without updating the cheat
      case 'licensedBy':
        sendResponse({ text: JSON.stringify(localStorage.licensedBy === message.lby && localStorage.licensed) });
        if (localStorage.licensedBy !== message.lby) {
          delete localStorage.licensed;
          localStorage.licensedBy = message.lby;
        }
        break;
    }
  });

  // Matchmaker token bypass (buggy way)
  // let mmurl = null
  // let lrdr = null
  // chrome.webRequest.onBeforeRequest.addListener((details) => {
  //     console.log("Matchmaker request:", details.url)
  //     if (!details.url.includes("seek-game")) {
  //         return
  //     }
  //     if (details.url === lrdr) {
  //         return
  //     }
  //     if (mmurl) {
  //         let tmp = mmurl
  //         lrdr = mmurl
  //         mmurl = null
  //         return {
  //             redirectUrl: tmp,
  //         }
  //     }
  //     mmurl = details.url
  //     chrome.tabs.executeScript(details.tabId, {
  //         code: "document.write('<style>*{background: black; color: black}</style>')"
  //     })
  //     chrome.tabs.reload(details.tabId)
  //     return {
  //         cancel: true,
  //     }
  // }, {
  //     urls: ["*://matchmaker.krunker.io/*"],
  // }, ['blocking'])

  // Licensing
  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      localStorage.licensed = true;
      return {
        redirectUrl: 'https://krunker.io/',
      };
    },
    {
      urls: [keyUrl],
    },
    ['blocking']
  );

  // Injecting (works better)
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    try {
      const url = new URL(tab.url);
      if (changeInfo.status === 'loading' && url.hostname === 'krunker.io' && url.pathname === '/') {
        console.log('Injecting');
        chrome.tabs.executeScript(tabId, {
          file: 'main/content.js',
          runAt: 'document_start',
        });
      }
    } catch {}
  });

  // Injecting
  // chrome.webRequest.onResponseStarted.addListener(details => {
  //     chrome.tabs.executeScript(details.tabId, {
  //         file: "main/content.js",
  //         runAt: "document_start",
  //     })
  // }, {
  //     urls: [
  //         "*://krunker.io/",
  //         "*://krunker.io/?*",
  //     ]
  // })
})();
