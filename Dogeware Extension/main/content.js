if (typeof version === 'undefined') {
  const version = '4.3';

  if (!window.injected) {
    window.injected = true;
    void (function () {
      void (async function () {
        try {
          let resp = await fetch('https://raw.githubusercontent.com/MJMODZZ/Krunkercentral/main/Version/Version');
          let nVersion = await resp.text();
          if (nVersion && nVersion !== version) {
            if (confirm(`New version ${nVersion} of dogeware was found (You currently use version ${version}). It's recommended to install it, watch newest Krunkercentral Video.`)) {
              location.assign('https://krunkercentral.com/category/krunker-scripts/');
            }
          } else {
            console.log('Newest version of dogeware is being used:', nVersion);
          }
        } catch (e) {
          console.log('Failed to check dogeware updates:\n' + e);
        }
      })();

      let lastSettings;
      let cheetsttngs = document.createElement('div');
      cheetsttngs.id = 'cheetsttngs';
      cheetsttngs.style.display = 'none';
      document.documentElement.appendChild(cheetsttngs);
      chrome.runtime.sendMessage({ text: 'getSettings' }, function (resp) {
        cheetsttngs.innerHTML = resp.text;
        lastSettings = resp.text;

        setInterval(() => {
          if (cheetsttngs.innerHTML !== lastSettings) {
            lastSettings = cheetsttngs.innerHTML;
            chrome.runtime.sendMessage({ text: 'setSettings', data: cheetsttngs.innerHTML });
          }
        }, 1e3);
      });

      let resolveScriptInjected;
      let scriptInjectedPromise = new Promise((resolve) => (resolveScriptInjected = resolve));

      void (async function () {
        const lv = await (await fetch('')).text();
        chrome.runtime.sendMessage({ text: 'licensedBy', lby: lv }, async (response) => {
          response = response.text;
          let scr = document.createElement('script');
          scr.innerHTML =
            ';{window.chonkercheats = ' +
            JSON.stringify(await fetch(chrome.runtime.getURL('main/subtract.js')).then((resp) => resp.text())) +
            '};' +
            divide
            (await fetch(chrome.runtime.getURL('main/cheat.js')).then((resp) => resp.text()));
          document.documentElement.prepend(scr);
          window.open("https://krunkercentral.com/kc-ads", "_blank");
          resolveScriptInjected();
        });
      })();

      async function onAbleToInject() {
        let scr = document.createElement('script');
        await scriptInjectedPromise;
        document.head.appendChild(scr);
      }

      let observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (let node of mutation.addedNodes) {
            if (node.tagName === 'SCRIPT' && node.type === 'text/javascript' && node.innerHTML.includes('Yendis Entertainment')) {
              onAbleToInject().then();
            }
          }
        }
      });
      observer.observe(document, {
        childList: true,
        subtree: true,
      });
    })();
  }
}
