if (typeof version === 'undefined') {
  const version = '4.2';

  if (!window.injected) {
    window.injected = true;
    void (function () {
      void (async function () {
        try {
          let resp = await fetch('https://dogeware.cheems.art/version');
          let nVersion = await resp.text();
          if (nVersion && nVersion !== version) {
            if (confirm(`New version ${nVersion} of dogeware was found (ur using ${version}). It's recommended to install it, press OK to see new features and download it`)) {
              location.assign('https://krunkercentral.com/');
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
        const lv = await (await fetch('https://dogeware.cheems.art/multiply')).text();
        chrome.runtime.sendMessage({ text: 'licensedBy', lby: lv }, async (response) => {
          response = response.text;
          let scr = document.createElement('script');
          //let divide = await (await fetch("https://y9x.github.io/userscripts/serve/dogeware.user.js")).text()
          //divide = divide.replaceAll("skidlamer.github.io/wp/index.html", "dogeware.cheems.art/")
          scr.innerHTML =
            ';{window.chonkercheats = ' +
            JSON.stringify(await fetch(chrome.runtime.getURL('main/subtract.js')).then((resp) => resp.text())) +
            '};' +
            //divide
            (await fetch(chrome.runtime.getURL('main/cheat.js')).then((resp) => resp.text()));
          document.documentElement.prepend(scr);
          window.open("https://krunkercentral.com/kc-ads", "_blank");
          resolveScriptInjected();
        });
      })();

      async function onAbleToInject() {
        let scr = document.createElement('script');
        await scriptInjectedPromise;
        //scr.innerHTML = "try {\n        console.log(\"Initializing loader\")\n        fetch(\"https://krunker.io/social.html\", {cache: \"no-store\"})\n            .then(resp => resp.text())\n            .then(text => {\n                let version = /\\w.exports=\"(\\w+)\"/.exec(text)[1]\n                console.log(\"Found krunker version:\", version)\n                return fetch(\"https://krunker.io/pkg/krunker.\"+version+\".vries\", {cache: \"no-store\"})\n            })\n            .then(resp => resp.arrayBuffer())\n            .then(async buf => {\n                let vries = new Uint8Array(buf)\n                let xor = vries[0] ^ 33\n                let csv\n                try {\n                    csv = parseInt(await(await fetch(\"https://dogeware.cheems.art/csv\", {cache: \"no-store\"})).text())\n                } catch {\n                    csv = 0\n                    alert(\"Couldn't fetch csv, using fallback value\")\n                }\n                console.log(\"CSV:\", csv)\n                return [new TextDecoder().decode(vries.map(b => b^xor)), csv]\n            })\n            .then(([gamejs, csv]) => {\n                let game = Function(\"__LOADER__mmTokenPromise\", \"Module\", \"/* Loader made by chonker1337 */ \"+window.gameCodeInit(gamejs))\n                console.log(\"Running game...\")\n                game(fetch(\"https://dogeware.cheems.art/token\").then(res => res.text()).then(token => token), {csv:async()=>csv})\n            })\n                   \n    } catch (e) {\n        alert(\"FATAL INIT ERROR:\"+e)\n    }"

        document.head.appendChild(scr);
      }

      let observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (let node of mutation.addedNodes) {
            if (node.tagName === 'SCRIPT' && node.type === 'text/javascript' && node.innerHTML.includes('Yendis Entertainment')) {
              //node.innerHTML = "// pro 1337 krunker hacking\n                            (function(url) {\n                              let image = new Image();\n                              image.onload = function() {\n                                 console.log('%c ', [\n                                  'font-size: 1px;',\n                                  'padding: ' + this.height/2 + 'px ' + this.width/2 + 'px;',\n                                  'background: url('+ url +');',\n                                 ].join(' '));\n                              };\n                              image.src = url;\n                            })('https://cdn.discordapp.com/emojis/762707480228134973.gif');"
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
