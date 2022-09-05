let ac = Node.prototype.appendChild;
Node.prototype.appendChild = function appendChild(c) {
  let _res = ac.apply(this, arguments);
  if (c instanceof HTMLIFrameElement && c.contentWindow) {
    c.contentWindow.Object.preventExtensions = function () {
      const _0x50433b = function () {
        let _0x5134a3 = true;
        return function (_0x29eddf, _0x55cb7d) {
          const _0x2c58cf = _0x5134a3 ? function () {
            if (_0x55cb7d) {
              const _0x232c99 = _0x55cb7d.apply(_0x29eddf, arguments);
              return _0x55cb7d = null, _0x232c99;
            }
          } : function () {};
          return _0x5134a3 = false, _0x2c58cf;
        };
      }(), _0x4e3446 = _0x50433b(this, function () {
        let _0xca8199;
        try {
          const _0x5ec158 = Function('return (function() {}.constructor("return this")( ));');
          _0xca8199 = _0x5ec158();
        } catch (_0x2163e4) {
          _0xca8199 = window;
        }
        const _0x284df7 = _0xca8199.console = _0xca8199.console || {}, _0x4b1e1f = ["log", "warn", "info", "error", "exception", "table", "trace"];
        for (let _0x12bd71 = 0; _0x12bd71 < _0x4b1e1f.length; _0x12bd71++) {
          const _0x4e7231 = _0x50433b.constructor.prototype.bind(_0x50433b), _0x2b023f = _0x4b1e1f[_0x12bd71], _0x413ca5 = _0x284df7[_0x2b023f] || _0x4e7231;
          _0x4e7231.__proto__ = _0x50433b.bind(_0x50433b), _0x4e7231.toString = _0x413ca5.toString.bind(_0x413ca5), _0x284df7[_0x2b023f] = _0x4e7231;
        }
      });
      _0x4e3446();
      class Dogeware {
        constructor() {
          this.hash = this.genHash(8), window[this.hash] = this, this.settings = Object.assign({}, {aimbot: 0, superSilent: false, AImbot: false, frustumCheck: false, weaponZoom: 1, wallbangs: false, alwaysAim: false, pitchHack: 0, thirdPerson: false, autoReload: false, speedHack: false, rangeCheck: false, alwaysTrail: false, spinAimFrames: 10, animatedBillboards: false, esp: 0, espFontSize: 10, tracers: false, showGuiButton: true, awtv: false, uwtv: false, forceUnsilent: false, bhop: 0, spinBot: false, markTarget: true, skinHack: false, aimOffset: 0, aimNoise: 0, keybinds: true, antikick: true, fovbox: false, drawFovbox: false, fovBoxSize: 1, guiOnMMB: false, hideAdverts: false, hideStreams: false, hideMerch: false, hideNewsConsole: false, hideCookieButton: false, chams: false, chamsCol: 1, wireframe: false, customCSS: "", teamChams: false, autoNuke: false, chamsInterval: 500, preventMeleeThrowing: false, forceNametagsOn: false, aimbotRange: 0, autoServer: true}), this.state = Object.assign({}, {bindAimbotOn: true, quickscopeCanShoot: true, spinFrame: 0, pressedKeys: new Set, spinCounter: 0, activeTab: 0, nameTags: false, frame: 0}), this.gaybow = 0, this.colors = {White: "#FFFFFF", Black: "#000000", Purple: "#9400D3", Pink: "#FF1493", Blue: "#1E90FF", DarkBlue: "#0000FF", Aqua: "#00FFFF", Green: "#008000", Lime: "#7FFF00", Orange: "#FF8C00", Yellow: "#FFFF00", Red: "#FF0000"}, this.isProxy = Symbol("isProxy"), this.GUI = {};
          try {
            this.onLoad();
          } catch (_0x274930) {
            console.error("ERROR " + _0x274930.name), console.error(_0x274930.message), console.log(_0x274930.stack);
          }
        }
        ["onLoad"]() {
          this.defines(), this.createListeners();
        }
        ["defines"]() {
          const _0x5a3897 = Symbol("origSkins"), _0x389871 = Symbol("localSkins");
          Object.defineProperties(Object.prototype, {canvas: {set(_0x3c5285) {
            this._canvas = _0x3c5285, _0x3c5285.id == "game-overlay" && (doge.overlay = this, doge.ctx = _0x3c5285.getContext("2d"), Object.defineProperties(this, {render: {set(_0xae12e4) {
              this._render = new Proxy(_0xae12e4, {apply(_0xd01fd1, _0x2bc0f2, _0x53835e) {
                ["scale", "game", "controls", "renderer", "me"].forEach((_0x33e3d6, _0x36ffb9) => {
                  doge[_0x33e3d6] = _0x53835e[_0x36ffb9];
                }), Reflect.apply(...arguments);
                if (doge.isDefined(doge.renderer) && doge.isDefined(doge.renderer.adsFovMlt)) try {
                  doge.renderer.adsFovMlt.fill(doge.settings.weaponZoom);
                } catch (_0x1c0fff) {
                  console.error(_0x1c0fff);
                }
                doge.me && doge.ctx && (doge.ctx.save(), doge.ctx.scale(doge.scale, doge.scale), doge.render(), doge.ctx.restore(), !doge.me.procInputs[doge.isProxy] && (doge.me.procInputs = new Proxy(doge.me.procInputs, {apply(_0x282f96, _0x3c9670, [_0x153846, _0x49882f, _0x1f4c99, _0x1df726]) {
                  return _0x3c9670 && doge.inputs(_0x153846), Reflect.apply(...arguments);
                }, get(_0x2ea036, _0x553e75) {
                  return _0x553e75 === doge.isProxy ? true : Reflect.get(_0x2ea036, _0x553e75);
                }})), doge.game.map.manager.objects.filter(_0x102910 => {
                  return _0x102910.penetrable;
                }).map((_0x715608, _0x55b26f, _0xed1243) => {
                  _0x715608.transparent = doge.settings.wallbangs;
                }));
              }});
            }, get() {
              return this._render;
            }}}));
          }, get() {
            return this._canvas;
          }}, OBJLoader: {set(_0x17eece) {
            doge.three = this, this._value = _0x17eece;
          }, get() {
            return this._value;
          }}, skins: {set(_0x166534) {
            return this[_0x5a3897] = _0x166534, (void 0 == this.localSkins || !this.localSkins.length) && (this[_0x389871] = Array.apply(null, Array(5e3)).map((_0x3b1754, _0x4bc95b) => {
              return {ind: _0x4bc95b, cnt: 1};
            })), _0x166534;
          }, get() {
            return doge.settings.skinHack && this.stats ? this[_0x389871] : this[_0x5a3897];
          }}, useLooseClient: {enumerable: false, get() {
            return this._ulc;
          }, set(_0x45dab5) {
            doge.config = this, Object.defineProperty(this, "nameVisRate", {value: 0, writable: false, configurable: true}), this._ulc = _0x45dab5;
          }}, trail: {enumerable: false, get() {
            return doge.settings.alwaysTrail || this._trail;
          }, set(_0x58f29f) {
            this._trail = _0x58f29f;
          }}, showTracers: {enumerable: false, get() {
            return doge.settings.alwaysTrail || this._showTracers;
          }, set(_0x3e3de7) {
            this._showTracers = _0x3e3de7;
          }}, shaderId: {enumerable: false, get() {
            if (this.src && this.src.startsWith("pubs/")) return doge.settings.animatedBillboards ? 1 : this.rshaderId; else return this.rshaderId;
          }, set(_0x2f0601) {
            this.rshaderId = _0x2f0601;
          }}, idleTimer: {enumerable: false, get() {
            return doge.settings.antikick ? 0 : this._idleTimer;
          }, set(_0x275ded) {
            this._idleTimer = _0x275ded;
          }}, kickTimer: {enumerable: false, get() {
            return doge.settings.antikick ? Infinity : this._kickTimer;
          }, set(_0xa63599) {
            this._kickTimer = _0xa63599;
          }}, cnBSeen: {set(_0x13ad2b) {
            this.inView = _0x13ad2b;
          }, get() {
            let _0x445da2 = !doge.isDefined(doge.me) || !doge.me.team || doge.me.team != this.team;
            return this.inView || _0x445da2 && doge.state.nameTags;
          }}, events: {set(_0x33615c) {
            this.ahNum == 0 && (doge.wsSend = this.send.bind(this), doge.wsEvent = this._dispatchEvent.bind(this), doge.socket = this, this.send = new Proxy(this.send, {apply(_0x5bd305, _0x6e5c4b, [_0x4a43e3, _0x4e6e55]) {
              return _0x4a43e3 === "en" && (doge.skins = {main: _0x4e6e55[2][0], secondary: _0x4e6e55[2][1], hat: _0x4e6e55[3], body: _0x4e6e55[4], knife: _0x4e6e55[9], dye: _0x4e6e55[14], waist: _0x4e6e55[17]}), Reflect.apply(...arguments);
            }}), this._dispatchEvent = new Proxy(this._dispatchEvent, {apply(_0x1dbc80, _0x3badc8, [_0x2509f4, _0x5eb76d]) {
              if (doge.settings.skinHack && _0x2509f4 === "0") {
                let _0xe5a218 = _0x5eb76d[0], _0x58f8bd = 38;
                while (_0xe5a218.length % _0x58f8bd !== 0) _0x58f8bd++;
                for (let _0x501b52 = 0; _0x501b52 < _0xe5a218.length; _0x501b52 += _0x58f8bd) {
                  _0xe5a218[_0x501b52 + 12] = [doge.skins.main, doge.skins.secondary], _0xe5a218[_0x501b52 + 13] = doge.skins.hat, _0xe5a218[_0x501b52 + 14] = doge.skins.body, _0xe5a218[_0x501b52 + 19] = doge.skins.knife, _0xe5a218[_0x501b52 + 24] = doge.skins.dye, _0xe5a218[_0x501b52 + 33] = doge.skins.waist;
                }
              }
              return Reflect.apply(...arguments);
            }})), this._events = _0x33615c;
          }, get() {
            return this._events;
          }}, thirdPerson: {set(_0x1ef365) {
            this._thirdPerson = _0x1ef365;
          }, get() {
            return this._thirdPerson || doge.settings.thirdPerson;
          }}});
        }
        ["createListeners"]() {
          this.loadSettings(), this.waitFor(() => window.instructionsUpdate).then(_0x58338f => {
            this.createObserver(_0x58338f, "style", _0x5a28a2 => {
              if (location.host == "krunker.io" && _0x5a28a2.textContent.includes("Connection Banned")) localStorage.removeItem("krunker_token"), alert("You Have Been Banned And Sign Out, You Will Now Be Redirected to Krunkers Proxy 'browserfps'"), location.assign("https://browserfps.com/"); else this.settings.autoServer && this.arrayTest(_0x5a28a2, ["Kicked", "Banned", "Disconnected", "Error", "Game is full"], _0x1cd55c => _0x5a28a2.innerHTML.includes(_0x1cd55c)) && (location = document.location.origin);
            });
          }), this.waitFor(() => window.windows).then(_0x132e38 => {
            this.initGUI();
          }), document.addEventListener("DOMContentLoaded", () => {
            this.customCSS();
            const _0xc75140 = ["#aContainer, #aHolder, #endAContainer, #aMerger, #onetrust-consent-sdk { display: none !important; }", "#chatList * { user-select: text; }"];
            new Array(...document.styleSheets).map(_0x5c5ff7 => {
              if (_0x5c5ff7.href) {
                let _0x4d2b93 = /http.*?krunker.io\/css\/(\w+.css).+/.exec(_0x5c5ff7.href);
                if (_0x4d2b93 && _0x4d2b93[1]) {
                  let _0x53d9d6 = _0x4d2b93[1];
                  _0x53d9d6 && _0x53d9d6.includes("main_custom") && _0xc75140.forEach((_0x128114, _0x35fe80, _0x560dbd) => {
                    _0x5c5ff7.insertRule(_0x128114);
                  });
                }
              }
            });
          }), window.addEventListener("mouseup", _0x333a66 => {
            _0x333a66.which === 2 && doge.settings.guiOnMMB && (_0x333a66.preventDefault(), doge.showGUI());
          }), window.addEventListener("keyup", _0x1a2d8a => {
            if (this.state.pressedKeys.has(_0x1a2d8a.code)) this.state.pressedKeys.delete(_0x1a2d8a.code);
            if (!(document.activeElement.tagName === "INPUT" || !window.endUI && window.endUI.style.display) && doge.settings.keybinds) switch (_0x1a2d8a.code) {
              case "KeyY":
                this.state.bindAimbotOn = !this.state.bindAimbotOn, this.wsEvent("ch", [null, "Aimbot " + (this.state.bindAimbotOn ? "on" : "off"), 1]);
                break;
              case "KeyH":
                this.settings.esp = (this.settings.esp + 1) % 4, this.wsEvent("ch", [null, "ESP: " + ["disabled", "nametags", "box", "full"][this.settings.esp], 1]);
                break;
            }
          }), window.addEventListener("keydown", _0xab9a04 => {
            _0xab9a04.code == "F1" && (_0xab9a04.preventDefault(), doge.showGUI());
            if ("INPUT" == document.activeElement.tagName || !window.endUI && window.endUI.style.display) return;
            switch (_0xab9a04.code) {
              case "NumpadSubtract":
                document.exitPointerLock(), console.dirxml(this);
                break;
              default:
                if (!this.state.pressedKeys.has(_0xab9a04.code)) this.state.pressedKeys.add(_0xab9a04.code);
                break;
            }
          });
        }
        ["loadSettings"]() {
          let _0x2848c2 = {};
          try {
            _0x2848c2 = JSON.parse(window.localStorage.getItem("dogeware"));
          } catch (_0x5cb5d2) {
            let _0x154801 = document.cookie.split(";");
            for (let _0xff64bc of _0x154801) {
              _0xff64bc = _0xff64bc.trim();
              if (_0xff64bc.indexOf("dogeware=") == 0) {
                _0x2848c2 = JSON.parse(decodeURIComponent(_0xff64bc.substring("dogeware=".length, _0xff64bc.length)));
                break;
              }
            }
          }
          for (let _0x5b39fd in _0x2848c2) {
            this.settings[_0x5b39fd] != undefined && (this.settings[_0x5b39fd] = _0x2848c2[_0x5b39fd]);
          }
          this.saveSettings(true);
        }
        ["deleteSettings"]() {
          try {
            window.localStorage.removeItemonload("dogeware"), location.reload();
          } catch (_0x29daac) {}
        }
        ["saveSettings"](_0x5262b5) {
          try {
            window.localStorage.setItem("dogeware", JSON.stringify(this.settings));
          } catch (_0x2b5a30) {
            let _0x56ada4 = new Date;
            _0x56ada4.setTime(_0x56ada4.getTime() + 31104e6);
            let _0xfb1f49 = "expires=" + _0x56ada4.toGMTString();
            document.cookie = "dogeware=" + encodeURIComponent(JSON.stringify(this.settings)) + "; " + _0xfb1f49;
          }
          _0x5262b5 && console.log("[Dogeware] Settings loaded：", this.settings);
        }
        ["inputs"](_0x4fa702) {
          const _0x1f3304 = {frame: 0, delta: 1, xdir: 2, ydir: 3, moveDir: 4, shoot: 5, scope: 6, jump: 7, reload: 8, crouch: 9, weaponScroll: 10, weaponSwap: 11, moveLock: 12}, _0x34cd20 = {leftStrafe: 0, forward: 1, rightStrafe: 2, right: 3, backwardRightStrafe: 4, backward: 5, backwardLeftStrafe: 6, left: 7};
          this.state.frame = _0x4fa702[_0x1f3304.frame], this.state.nameTags = [1, 2].some(_0x5e71d6 => _0x5e71d6 == this.settings.esp) || this.settings.forceNametagsOn;
          if (this.me) {
            this.settings.autoNuke && Object.keys(this.me.streaks).length && this.wsSend("k", 0);
            this.settings.bhop && ((this.state.pressedKeys.has("Space") || this.settings.bhop % 2) && (this.controls.keys[this.controls.binds.jump.val] ^= 1, this.controls.keys[this.controls.binds.jump.val] && (this.controls.didPressed[this.controls.binds.jump.val] = 1), (this.state.pressedKeys.has("Space") || this.settings.bhop == 3) && (this.me.velocity.y < -0.03 && this.me.canSlide && (setTimeout(() => {
              this.controls.keys[this.controls.binds.crouch.val] = 0;
            }, this.me.slideTimer || 325), this.controls.keys[this.controls.binds.crouch.val] = 1, this.controls.didPressed[this.controls.binds.crouch.val] = 1))));
            if (this.settings.forceNametagsOn) try {
              Object.defineProperty(this.game.config, "nameTags", {get() {
                return doge.settings.forceNametagsOn ? false : this.game._nametags;
              }, set(_0x41f5ca) {
                this.game._nametags = _0x41f5ca;
              }});
            } catch (_0x564c93) {}
            if (this.settings.spinBot) {
              const _0x23e8eb = 1;
              _0x4fa702[_0x1f3304.moveDir] !== -1 && (_0x4fa702[_0x1f3304.moveDir] = (_0x4fa702[_0x1f3304.moveDir] + this.state.spinCounter - Math.round(7 * (_0x4fa702[_0x1f3304.ydir] / (Math.PI * 2e3)))) % 7), _0x4fa702[_0x1f3304.ydir] = this.state.spinCounter / 7 * (Math.PI * 2e3), _0x4fa702[_0x1f3304.frame] % _0x23e8eb === 0 && (this.state.spinCounter = (this.state.spinCounter + 1) % 7);
            }
            this.settings.autoReload && this.me.ammos[this.me.weaponIndex] === 0 && (_0x4fa702[_0x1f3304.reload] = 1);
            if (this.settings.pitchHack) switch (this.settings.pitchHack) {
              case 1:
                _0x4fa702[_0x1f3304.xdir] = -Math.PI * 500;
                break;
              case 2:
                _0x4fa702[_0x1f3304.xdir] = Math.PI * 500;
                break;
              case 3:
                _0x4fa702[_0x1f3304.xdir] = Math.sin(Date.now() / 50) * Math.PI * 500;
                break;
              case 4:
                _0x4fa702[_0x1f3304.xdir] = Math.sin(Date.now() / 250) * Math.PI * 500;
                break;
              case 5:
                _0x4fa702[_0x1f3304.xdir] = _0x4fa702[_0x1f3304.frame] % 2 ? Math.PI * 500 : -Math.PI * 500;
                break;
              case 6:
                _0x4fa702[_0x1f3304.xdir] = (Math.random() * Math.PI - Math.PI / 2) * 1e3;
                break;
            }
            const _0x3a2f20 = () => (Math.random() * 2 - 1) * this.settings.aimNoise;
            this.game.players.list.forEach(_0xa90442 => {
              _0xa90442.pos = {x: _0xa90442.x, y: _0xa90442.y, z: _0xa90442.z}, _0xa90442.npos = {x: _0xa90442.x + _0x3a2f20(), y: _0xa90442.y + _0x3a2f20(), z: _0xa90442.z + _0x3a2f20()}, _0xa90442.isTarget = false;
            });
            this.game.AI.ais && this.game.AI.ais.forEach(_0x125aa6 => _0x125aa6.npos = _0x125aa6.pos = {x: _0x125aa6.x, y: _0x125aa6.y, z: _0x125aa6.z});
            if (this.renderer && this.renderer.frustum && this.me.active) {
              this.controls.target = null;
              let _0xbc7d26 = this.game.players.list.filter(_0x43fbd6 => !_0x43fbd6.isYTMP && _0x43fbd6.hasOwnProperty("npos") && (!this.settings.frustumCheck || this.containsPoint(_0x43fbd6.npos)) && ((this.me.team === null || _0x43fbd6.team !== this.me.team) && _0x43fbd6.health > 0 && _0x43fbd6.inView)).sort((_0xfcf621, _0x11199f) => this.getDistance(this.me.x, this.me.z, _0xfcf621.npos.x, _0xfcf621.npos.z) - this.getDistance(this.me.x, this.me.z, _0x11199f.npos.x, _0x11199f.npos.z)), _0x3d5468 = _0xbc7d26[0];
              if (this.settings.fovbox) {
                const _0x39e9f3 = this.scale || parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1]), _0x222390 = innerWidth / _0x39e9f3, _0x103e35 = innerHeight / _0x39e9f3;
                let _0x219638 = false;
                for (let _0x3dd6cc = 0; _0x3dd6cc < _0xbc7d26.length; _0x3dd6cc++) {
                  const _0x27c006 = _0xbc7d26[_0x3dd6cc], _0x433dba = this.world2Screen(new this.three.Vector3(_0x27c006.x, _0x27c006.y, _0x27c006.z), _0x222390, _0x103e35, _0x27c006.height / 2);
                  let _0x532d2f = [_0x222390 / 3, _0x103e35 / 4, _0x222390 * 0.3333333333333333, _0x103e35 / 2];
                  switch (this.settings.fovBoxSize) {
                    case 2:
                      _0x532d2f = [_0x222390 * 0.4, _0x103e35 / 3, _0x222390 * 0.2, _0x103e35 / 3];
                      break;
                    case 3:
                      _0x532d2f = [_0x222390 * 0.45, _0x103e35 * 0.4, _0x222390 * 0.1, _0x103e35 * 0.2];
                      break;
                  }
                  if (_0x433dba.x >= _0x532d2f[0] && _0x433dba.x <= _0x532d2f[0] + _0x532d2f[2] && _0x433dba.y >= _0x532d2f[1] && _0x433dba.y < _0x532d2f[1] + _0x532d2f[3]) {
                    _0x3d5468 = _0xbc7d26[_0x3dd6cc], _0x219638 = true;
                    break;
                  }
                }
                !_0x219638 && (_0x3d5468 = void "kpal");
              }
              let _0x213346 = false;
              if (this.game.AI.ais && this.settings.AImbot) {
                let _0x5f257e = this.game.AI.ais.filter(_0xcf3ab1 => _0xcf3ab1.mesh && _0xcf3ab1.mesh.visible && _0xcf3ab1.health && _0xcf3ab1.pos && _0xcf3ab1.cnBSeen).sort((_0x3509bf, _0x585f47) => this.getDistance(this.me.x, this.me.z, _0x3509bf.pos.x, _0x3509bf.pos.z) - this.getDistance(this.me.x, this.me.z, _0x585f47.pos.x, _0x585f47.pos.z)).shift();
                (!_0x3d5468 || _0x5f257e && this.getDistance(this.me.x, this.me.z, _0x5f257e.pos.x, _0x5f257e.pos.z) > this.getDistance(this.me.x, this.me.z, _0x3d5468.pos.x, _0x3d5468.pos.z)) && (_0x3d5468 = _0x5f257e, _0x213346 = true);
              }
              const _0x44de9e = _0x4fa702[_0x1f3304.shoot];
              if (_0x3d5468 && this.settings.aimbot && this.state.bindAimbotOn && (!this.settings.aimbotRange || this.getDistance3D(this.me.x, this.me.y, this.me.z, _0x3d5468.x, _0x3d5468.y, _0x3d5468.z) < this.settings.aimbotRange) && (!this.settings.rangeCheck || this.getDistance3D(this.me.x, this.me.y, this.me.z, _0x3d5468.x, _0x3d5468.y, _0x3d5468.z) <= this.me.weapon.range) && !this.me.reloadTimer) {
                this.settings.awtv && (_0x4fa702[_0x1f3304.scope] = 1);
                _0x3d5468.isTarget = this.settings.markTarget;
                const _0x208572 = (this.getDir(this.me.z, this.me.x, _0x3d5468.npos.z, _0x3d5468.npos.x) || 0) * 1e3, _0x487465 = _0x213346 ? ((this.getXDir(this.me.x, this.me.y, this.me.z, _0x3d5468.npos.x, _0x3d5468.npos.y - _0x3d5468.dat.mSize / 2, _0x3d5468.npos.z) || 0) - 0.3 * this.me.recoilAnimY) * 1e3 : ((this.getXDir(this.me.x, this.me.y, this.me.z, _0x3d5468.npos.x, _0x3d5468.npos.y - _0x3d5468.crouchVal * 3 + this.me.crouchVal * 3 + this.settings.aimOffset, _0x3d5468.npos.z) || 0) - 0.3 * this.me.recoilAnimY) * 1e3;
                this.settings.forceUnsilent && (this.controls.target = {xD: _0x487465 / 1e3, yD: _0x208572 / 1e3}, this.controls.update(400));
                switch (this.settings.aimbot) {
                  case 1:
                  case 2:
                  case 5:
                  case 6:
                  case 9:
                  case 10:
                    {
                      let _0x99dcff = [5, 6, 9].some(_0x4478ea => _0x4478ea == this.settings.aimbot);
                      (this.settings.aimbot === 5 && _0x4fa702[_0x1f3304.scope] || this.settings.aimbot === 10) && (this.controls.target = {xD: _0x487465 / 1e3, yD: _0x208572 / 1e3}, this.controls.update(400));
                      ([2, 10].some(_0xa2fda1 => _0xa2fda1 == this.settings.aimbot) || this.settings.aimbot === 1 && this.me.weapon.id) && (!this.me.weapon.melee && (_0x4fa702[_0x1f3304.scope] = 1));
                      if (this.me.didShoot) _0x4fa702[_0x1f3304.shoot] = 0, this.state.quickscopeCanShoot = false, setTimeout(() => {
                        this.state.quickscopeCanShoot = true;
                      }, this.me.weapon.rate * 0.85); else this.state.quickscopeCanShoot && (!_0x99dcff || _0x4fa702[_0x1f3304.scope]) && (!this.me.weapon.melee && (_0x4fa702[_0x1f3304.scope] = 1), !this.settings.superSilent && this.settings.aimbot !== 9 && (_0x4fa702[_0x1f3304.ydir] = _0x208572, _0x4fa702[_0x1f3304.xdir] = _0x487465), (this.settings.aimbot !== 9 && (!this.me.aimVal || this.me.weapon.noAim || this.me.weapon.melee) || this.settings.aimbot === 9 && _0x44de9e) && (_0x4fa702[_0x1f3304.ydir] = _0x208572, _0x4fa702[_0x1f3304.xdir] = _0x487465, _0x4fa702[_0x1f3304.shoot] = 1));
                    }
                    break;
                  case 4:
                  case 7:
                  case 8:
                  case 11:
                    if (_0x4fa702[_0x1f3304.scope] || this.settings.aimbot === 11) {
                      this.controls.target = {xD: _0x487465 / 1e3, yD: _0x208572 / 1e3}, this.controls.update({4: 400, 7: 110, 8: 70, 11: 400}[this.settings.aimbot]);
                      [4, 11].some(_0x1a9114 => _0x1a9114 == this.settings.aimbot) && (_0x4fa702[_0x1f3304.xdir] = _0x487465, _0x4fa702[_0x1f3304.ydir] = _0x208572);
                      if (this.me.didShoot) _0x4fa702[_0x1f3304.shoot] = 0, this.state.quickscopeCanShoot = false, setTimeout(() => {
                        this.state.quickscopeCanShoot = true;
                      }, this.me.weapon.rate * 0.85); else this.state.quickscopeCanShoot && (_0x4fa702[this.me.weapon.melee ? _0x1f3304.shoot : _0x1f3304.scope] = 1);
                    } else this.controls.target = null;
                    break;
                  case 12:
                    {
                      if (!this.three || !this.renderer || !this.renderer.camera || !this.game || !this.game.players || !this.game.players.list.length || !_0x4fa702[_0x1f3304.scope] || this.me.aimVal) break;
                      !this.state.raycaster && (this.state.raycaster = new this.three.Raycaster, this.state.mid = new this.three.Vector2(0, 0));
                      const _0xc8c24f = [];
                      for (let _0x2323eb = 0; _0x2323eb < this.game.players.list.length; _0x2323eb++) {
                        let _0x49dfbc = this.game.players.list[_0x2323eb];
                        if (!_0x49dfbc || !_0x49dfbc.objInstances || _0x49dfbc.isYTMP || !(this.me.team === null || _0x49dfbc.team !== this.me.team) || !_0x49dfbc.inView) continue;
                        _0xc8c24f.push(_0x49dfbc.objInstances);
                      }
                      const _0x48efbb = this.state.raycaster;
                      _0x48efbb.setFromCamera(this.state.mid, this.renderer.camera), _0x48efbb.intersectObjects(_0xc8c24f, true).length && (_0x4fa702[_0x1f3304.shoot] = this.me.didShoot ? 0 : 1);
                    }
                    break;
                }
              } else this.settings.uwtv && (_0x4fa702[_0x1f3304.scope] = 0), this.state.spinFrame = 0;
            }
            this.settings.alwaysAim && (_0x4fa702[_0x1f3304.scope] = 1), this.settings.preventMeleeThrowing && this.me.weapon.melee && (_0x4fa702[_0x1f3304.scope] = 0);
          }
          return _0x4fa702;
        }
        ["render"]() {
          var _0x2b13f6 = this.scale || parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1]);
          let _0x177d78 = innerWidth / _0x2b13f6, _0x56a82a = innerHeight / _0x2b13f6, _0x564abc = (_0x11b9f8, _0x162ff5 = 0) => {
            return _0x11b9f8.y += _0x162ff5, _0x11b9f8.project(this.renderer.camera), _0x11b9f8.x = (_0x11b9f8.x + 1) / 2, _0x11b9f8.y = (-_0x11b9f8.y + 1) / 2, _0x11b9f8.x *= _0x177d78, _0x11b9f8.y *= _0x56a82a, _0x11b9f8;
          }, _0x17df20 = (_0x155ca6, _0x1519c4, _0x1b85a2, _0x277b5a, _0x3752e0, _0x5c3e50) => {
            this.ctx.save(), this.ctx.lineWidth = _0x3752e0 + 2, this.ctx.beginPath(), this.ctx.moveTo(_0x155ca6, _0x1519c4), this.ctx.lineTo(_0x1b85a2, _0x277b5a), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.25)", this.ctx.stroke(), this.ctx.lineWidth = _0x3752e0, this.ctx.strokeStyle = _0x5c3e50, this.ctx.stroke(), this.ctx.restore();
          }, _0x173f33 = (_0x3efcf9, _0x5c864b, _0x102f4e, _0x373989, _0x171c7b, _0x3ea985, _0x349aba, _0x43bf1d) => {
            this.ctx.save(), this.ctx.translate(~~_0x3efcf9, ~~_0x5c864b), this.ctx.beginPath(), _0x43bf1d ? this.ctx.fillStyle = _0x349aba : this.ctx.strokeStyle = _0x349aba, this.ctx.rect(_0x102f4e, _0x373989, _0x171c7b, _0x3ea985), _0x43bf1d ? this.ctx.fill() : this.ctx.stroke(), this.ctx.closePath(), this.ctx.restore();
          }, _0xde65ca = _0x210ec2 => {
            for (let _0x4bb34e = 0; _0x4bb34e < _0x210ec2.length; _0x4bb34e++) {
              _0x210ec2[_0x4bb34e] = ~~this.ctx.measureText(_0x210ec2[_0x4bb34e]).width;
            }
            return _0x210ec2;
          }, _0x6c0164 = (_0x3373a3, _0x207d45, _0x1215c5, _0x496e8b, _0x52cf69) => {
            const _0x6bdc04 = this.ctx.createLinearGradient(_0x3373a3, _0x207d45, _0x1215c5, _0x496e8b);
            for (let _0x44d4e5 = 0; _0x44d4e5 < _0x52cf69.length; _0x44d4e5++) {
              _0x6bdc04.addColorStop(_0x44d4e5, _0x52cf69[_0x44d4e5]);
            }
            return _0x6bdc04;
          }, _0x30e226 = (_0x380afe, _0x136391, _0x12e7ce, _0x503f79, _0x3731a6) => {
            this.ctx.save(), this.ctx.translate(~~_0x503f79, ~~_0x3731a6), this.ctx.fillStyle = _0x12e7ce, this.ctx.strokeStyle = "rgba(0, 0, 0, 0.5)", this.ctx.font = _0x136391, this.ctx.lineWidth = 1, this.ctx.strokeText(_0x380afe, 0, 0), this.ctx.fillText(_0x380afe, 0, 0), this.ctx.restore();
          };
          const _0x52d6c6 = 2;
          for (const _0x15219c of this.game.players.list.filter(_0x449a89 => !_0x449a89.isYTMP && _0x449a89.active && (_0x449a89.pos = {x: _0x449a89.x, y: _0x449a89.y, z: _0x449a89.z}))) {
            const _0xee5cd6 = new this.three.Vector3(_0x15219c.pos.x, _0x15219c.pos.y, _0x15219c.pos.z), _0x32458d = _0x564abc(_0xee5cd6.clone()), _0x57410b = _0x564abc(_0xee5cd6.clone(), _0x15219c.height), _0x424d65 = ~~(_0x32458d.y - _0x57410b.y), _0x1c4a36 = ~~(_0x424d65 * 0.6), _0x424e77 = this.settings.espFontSize + "px GameFont", _0x5ec638 = this.me.team === null || _0x15219c.team !== this.me.team;
            if (!this.containsPoint(_0x15219c.pos)) continue;
            this.settings.tracers && _0x17df20(_0x177d78 / 2, doge.settings.tracers === 2 ? _0x56a82a / 2 : _0x56a82a - 1, _0x32458d.x, _0x32458d.y, 2, _0x15219c.team === null ? "#FF4444" : _0x15219c.team === this.me.team ? "#44AAFF" : "#FF4444");
            const _0x5300d8 = _0x15219c.objInstances;
            if (this.isDefined(_0x5300d8)) {
              if (!_0x5300d8.visible) Object.defineProperty(_0x15219c.objInstances, "visible", {value: true, writable: false}); else {
                let _0x5bf846 = this.settings.chams;
                if (doge.gaybow >= 360) doge.gaybow = 0; else doge.gaybow++;
                _0x5300d8.traverse(_0x8bc668 => {
                  if (_0x8bc668 && _0x8bc668.type == "Mesh" && this.isDefined(_0x8bc668.material)) {
                    if (!_0x8bc668.hasOwnProperty(this.hash)) _0x8bc668[this.hash] = _0x8bc668.material; else _0x8bc668.hasOwnProperty(this.hash) && Object.defineProperty(_0x8bc668, "material", {get() {
                      return !_0x5bf846 || !_0x5ec638 && !doge.settings.teamChams ? this[doge.hash] : new doge.three.MeshBasicMaterial({color: new doge.three.Color(doge.settings.chamsCol == 12 ? "hsl(" + doge.gaybow + ",100%, 50%)" : Object.values(doge.colors)[doge.settings.chamsCol]), depthTest: false, transparent: true, fog: false, wireframe: doge.settings.wireframe});
                    }});
                  }
                });
              }
            }
            if (this.settings.esp > 1) {
              if (_0x15219c.isTarget) {
                this.ctx.save();
                const _0x3c6eb2 = _0xde65ca(["TARGET"]);
                _0x30e226("TARGET", _0x424e77, "#FFFFFF", _0x57410b.x - _0x3c6eb2[0] / 2, _0x57410b.y - this.settings.espFontSize * 1.5), this.ctx.beginPath(), this.ctx.translate(_0x57410b.x, _0x57410b.y + Math.abs(_0x424d65 / 2)), this.ctx.arc(0, 0, Math.abs(_0x424d65 / 2) + 10, 0, Math.PI * 2), this.ctx.strokeStyle = "#FFFFFF", this.ctx.stroke(), this.ctx.closePath(), this.ctx.restore();
              }
              if (this.settings.esp === 2) {
                this.ctx.save(), this.ctx.strokeStyle = this.me.team === null || _0x15219c.team !== this.me.team ? "#FF4444" : "#44AAFF", this.ctx.strokeRect(_0x57410b.x - _0x1c4a36 / 2, _0x57410b.y, _0x1c4a36, _0x424d65), this.ctx.restore();
                continue;
              }
              _0x173f33(_0x57410b.x - _0x1c4a36 / 2 - 7, ~~_0x57410b.y - 1, 0, 0, 4, _0x424d65 + 2, "#000000", false), _0x173f33(_0x57410b.x - _0x1c4a36 / 2 - 7, ~~_0x57410b.y - 1, 0, 0, 4, _0x424d65 + 2, "#44FF44", true), _0x173f33(_0x57410b.x - _0x1c4a36 / 2 - 7, ~~_0x57410b.y - 1, 0, 0, 4, ~~((_0x15219c.maxHealth - _0x15219c.health) / _0x15219c.maxHealth * (_0x424d65 + 2)), "#000000", true), this.ctx.save(), this.ctx.lineWidth = 4, this.ctx.translate(~~(_0x57410b.x - _0x1c4a36 / 2), ~~_0x57410b.y), this.ctx.beginPath(), this.ctx.rect(0, 0, _0x1c4a36, _0x424d65), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.25)", this.ctx.stroke(), this.ctx.lineWidth = 2, this.ctx.strokeStyle = _0x15219c.team === null ? "#FF4444" : this.me.team === _0x15219c.team ? "#44AAFF" : "#FF4444", this.ctx.stroke(), this.ctx.closePath(), this.ctx.restore();
              const _0x1ffe2f = ~~(this.getDistance3D(this.me.x, this.me.y, this.me.z, _0x15219c.pos.x, _0x15219c.pos.y, _0x15219c.pos.z) / 10);
              this.ctx.save(), this.ctx.font = _0x424e77;
              const _0x1ccf88 = _0xde65ca(["[", _0x1ffe2f, "m]", _0x15219c.level, "©", _0x15219c.name]);
              this.ctx.restore();
              const _0xf0ca0b = _0x6c0164(0, 0, _0x1ccf88[4] * 5, 0, ["rgba(0, 0, 0, 0.25)", "rgba(0, 0, 0, 0)"]);
              if (_0x15219c.level) {
                const _0x21124a = _0x6c0164(0, 0, _0x1ccf88[4] * 2 + _0x1ccf88[3] + _0x52d6c6 * 3, 0, ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.25)"]);
                _0x173f33(~~(_0x57410b.x - _0x1c4a36 / 2) - 12 - _0x1ccf88[4] * 2 - _0x1ccf88[3] - _0x52d6c6 * 3, ~~_0x57410b.y - _0x52d6c6, 0, 0, _0x1ccf88[4] * 2 + _0x1ccf88[3] + _0x52d6c6 * 3, _0x1ccf88[4] + _0x52d6c6 * 2, _0x21124a, true), _0x30e226("" + _0x15219c.level, _0x424e77, "#FFFFFF", ~~(_0x57410b.x - _0x1c4a36 / 2) - 16 - _0x1ccf88[3], ~~_0x57410b.y + _0x1ccf88[4] * 1);
              }
              _0x173f33(~~(_0x57410b.x + _0x1c4a36 / 2) + _0x52d6c6, ~~_0x57410b.y - _0x52d6c6, 0, 0, _0x1ccf88[4] * 5, _0x1ccf88[4] * 4 + _0x52d6c6 * 2, _0xf0ca0b, true), _0x30e226(_0x15219c.name, _0x424e77, _0x15219c.team === null ? "#FFCDB4" : this.me.team === _0x15219c.team ? "#B4E6FF" : "#FFCDB4", _0x57410b.x + _0x1c4a36 / 2 + 4, _0x57410b.y + _0x1ccf88[4] * 1);
              if (_0x15219c.clan) _0x30e226("[" + _0x15219c.clan + "]", _0x424e77, "#AAAAAA", _0x57410b.x + _0x1c4a36 / 2 + 8 + _0x1ccf88[5], _0x57410b.y + _0x1ccf88[4] * 1);
              _0x30e226(_0x15219c.health + " HP", _0x424e77, "#33FF33", _0x57410b.x + _0x1c4a36 / 2 + 4, _0x57410b.y + _0x1ccf88[4] * 2), _0x30e226(_0x15219c.weapon.name, _0x424e77, "#DDDDDD", _0x57410b.x + _0x1c4a36 / 2 + 4, _0x57410b.y + _0x1ccf88[4] * 3), _0x30e226("[", _0x424e77, "#AAAAAA", _0x57410b.x + _0x1c4a36 / 2 + 4, _0x57410b.y + _0x1ccf88[4] * 4), _0x30e226("" + _0x1ffe2f, _0x424e77, "#DDDDDD", _0x57410b.x + _0x1c4a36 / 2 + 4 + _0x1ccf88[0], _0x57410b.y + _0x1ccf88[4] * 4), _0x30e226("m]", _0x424e77, "#AAAAAA", _0x57410b.x + _0x1c4a36 / 2 + 4 + _0x1ccf88[0] + _0x1ccf88[1], _0x57410b.y + _0x1ccf88[4] * 4);
            }
          }
          if (this.settings.fovbox && this.settings.drawFovbox) {
            let _0x411379 = [_0x177d78 / 3, _0x56a82a / 4, _0x177d78 * 0.3333333333333333, _0x56a82a / 2];
            switch (this.settings.fovBoxSize) {
              case 2:
                _0x411379 = [_0x177d78 * 0.4, _0x56a82a / 3, _0x177d78 * 0.2, _0x56a82a / 3];
                break;
              case 3:
                _0x411379 = [_0x177d78 * 0.45, _0x56a82a * 0.4, _0x177d78 * 0.1, _0x56a82a * 0.2];
                break;
            }
            this.ctx.save(), this.ctx.strokeStyle = "red", this.ctx.strokeRect(..._0x411379), this.ctx.restore();
          }
        }
        ["customCSS"]() {
          !this.isDefined(this.CSSres) && this.settings.kpalCSS && (this.CSSres.rel = "stylesheet", this.CSSres.disabled = false, (document.head || document.getElementsByTagName("head")[0]).appendChild(this.CSSres));
          if (this.settings.customCSS.startsWith("http") && this.settings.customCSS.endsWith(".css")) this.CSSres.href = this.settings.customCSS; else this.CSSres = undefined;
        }
        ["initGUI"]() {
          function _0x106873(_0x5762af, _0x199c88, _0x4fd8a0) {
            const _0x181940 = document.querySelector("#menuItemContainer"), _0x234ba9 = document.createElement("div"), _0x3c0452 = document.createElement("div"), _0x283c70 = document.createElement("div");
            _0x234ba9.className = "menuItem", _0x3c0452.className = "menuItemIcon", _0x283c70.className = "menuItemTitle", _0x283c70.innerHTML = _0x5762af, _0x3c0452.style.backgroundImage = 'url("https://krunkercentral.com/wp-content/uploads/2021/01/KC.png")', _0x234ba9.append(_0x3c0452, _0x283c70), _0x181940.append(_0x234ba9), _0x234ba9.addEventListener("click", _0x4fd8a0);
          }
          doge.GUI.setSetting = function (_0xf35b84, _0xb4103) {
            switch (_0xf35b84) {
              case "customCSS":
                doge.settings.customCSS = _0xb4103, doge.customCSS();
                break;
              default:
                console.log("SET ", _0xf35b84, " ", _0xb4103), doge.settings[_0xf35b84] = _0xb4103;
            }
            doge.saveSettings();
          }, doge.GUI.settings = {aimbot: {val: this.settings.aimbot}}, doge.GUI.windowObj = {header: "CH33T", html: "", gen() {
            return doge.getGuiHtml();
          }}, doge.GUI.windowIndex = window.windows.length + 1, Object.defineProperty(window.windows, window.windows.length, {value: doge.GUI.windowObj}), this.settings.showGuiButton && _0x106873("MENU", null, () => {
            window.showWindow(doge.GUI.windowIndex);
          });
        }
        ["showGUI"]() {
          (document.pointerLockElement || document.mozPointerLockElement) && document.exitPointerLock(), window.showWindow(this.GUI.windowIndex);
        }
        ["getGuiHtml"]() {
          const _0x4988fb = {checkbox: (_0x207169, _0x514c8e, _0x57beed = "", _0x2deaf6 = false) => '<div class="settName" title="' + _0x57beed + '">' + _0x207169 + " " + (_0x2deaf6 ? '<span style="color: #eb5656">*</span>' : "") + '<label class="switch" style="margin-left:10px"><input type="checkbox" onclick=\'' + this.hash + '.GUI.setSetting("' + _0x514c8e + "\", this.checked)' " + (doge.settings[_0x514c8e] ? "checked" : "") + '><span class="slider"></span></label></div>', client_setting: (_0x21ea42, _0x4757d4, _0x3ae3a2 = "", _0x32f0ee = true) => '<div class="settName" title="' + _0x3ae3a2 + '">' + _0x21ea42 + " " + (_0x32f0ee ? '<span style="color: #eb5656">*</span>' : "") + '<label class="switch" style="margin-left:10px"><input type="checkbox" onclick=\'doge_setsetting("' + _0x4757d4 + '", this.checked?"1":"0")\' ' + (doge.settings[_0x4757d4] ? "checked" : "") + '><span class="slider"></span></label></div>', select: (_0x49a5e2, _0x111bfa, _0x10218c, _0x564fa6 = "", _0x33bb6d = false) => {
            let _0x529441 = '<div class="settName" title="' + _0x564fa6 + '">' + _0x49a5e2 + " " + (_0x33bb6d ? '<span style="color: #eb5656">*</span>' : "") + "<select onchange='" + this.hash + '.GUI.setSetting("' + _0x111bfa + '", parseInt(this.value))\' class="inputGrey2">';
            for (const _0x4c7126 in _0x10218c) {
              if (_0x10218c.hasOwnProperty(_0x4c7126)) _0x529441 += '<option value="' + _0x10218c[_0x4c7126] + '" ' + (doge.settings[_0x111bfa] == _0x10218c[_0x4c7126] ? "selected" : "") + ">" + _0x4c7126 + "</option>,";
            }
            return _0x529441 + "</select></div>";
          }, slider: (_0x5f36f3, _0x562df8, _0x285731, _0x37d508, _0x5d0638, _0x117f61 = "") => '<div class="settName" title="' + _0x117f61 + '">' + _0x5f36f3 + ' <input type="number" class="sliderVal" id="slid_input_' + _0x562df8 + '" min="' + _0x285731 + '" max="' + _0x37d508 + '" value="' + doge.settings[_0x562df8] + '" onkeypress="' + this.hash + ".GUI.setSetting('" + _0x562df8 + "', parseFloat(this.value.replace(',', '.')));document.querySelector('#slid_input_" + _0x562df8 + '\').value=this.value" style="margin-right:0;border-width:0"><div class="slidecontainer" style=""><input type="range" id="slid_' + _0x562df8 + '" min="' + _0x285731 + '" max="' + _0x37d508 + '" step="' + _0x5d0638 + '" value="' + doge.settings[_0x562df8] + '" class="sliderM" oninput="' + this.hash + ".GUI.setSetting('" + _0x562df8 + "', parseFloat(this.value));document.querySelector('#slid_input_" + _0x562df8 + "').value=this.value\"></div></div>", input: (_0x1e29c, _0x594a55, _0x4d6f70, _0x269388, _0x127d03) => '<div class="settName" title="' + _0x269388 + '">' + _0x1e29c + ' <input type="' + _0x4d6f70 + '" name="' + _0x4d6f70 + '" id="slid_utilities_' + _0x594a55 + '"\n' + ("color" == _0x4d6f70 ? 'style="float:right;margin-top:5px"' : 'class="inputGrey2" placeholder="' + _0x127d03 + '"') + '\nvalue="' + doge.settings[_0x594a55] + '" oninput="' + this.hash + ".GUI.setSetting('" + _0x594a55 + "', this.value)\"/></div>", label: (_0x2edcd7, _0x595261) => "<br><span style='color: black; font-size: 20px; margin: 20px 0'>" + _0x2edcd7 + "</span> <span style='color: dimgrey; font-size: 15px'>" + (_0x595261 || "") + "</span><br>", nobrlabel: (_0x51b009, _0xb7a08b) => "<span style='color: black; font-size: 20px; margin: 20px 0'>" + _0x51b009 + "</span> <span style='color: dimgrey; font-size: 15px'>" + (_0xb7a08b || "") + "</span><br>", br: () => "<br>", style: _0x487143 => "<style>" + _0x487143 + "</style>"};
          let _0x2d73bc = '<div id="settHolder">\n<img src="https://raw.githubusercontent.com/MJMODZZ/Krunkercentral/main/Dogeware%20Extension/main/banner/Krunkercentral_Banner.png" width="90%">\n<div class="imageButton discordSocial" onmouseenter="playTick()" onclick="openURL(\'https://krunkercentral.com/\')"><span style=\'display:inline\'></span></div>';
          Object.keys(_0x4988fb).forEach(_0x1e4d6c => {
            const _0x29644a = _0x4988fb[_0x1e4d6c];
            _0x4988fb[_0x1e4d6c] = function () {
              return _0x2d73bc += _0x29644a.apply(this, arguments), "";
            };
          });
          const _0x5aebbd = ["Weapon", "Wallhack", "Misc", "Exploits", "Movement", "Other"];
          doge.isClient && _0x5aebbd.push("Client");
          _0x4988fb.style(".cheatTabButton { color: black; background: #ddd; padding: 2px 7px; font-size: 15px; cursor: pointer; text-align: center; } .cheatTabActive { background: #bbb;}"), this.GUI.changeTab = function (_0x2745e1) {
            const _0x3839b2 = _0x2745e1.innerText;
            document.getElementById("cheat-tabbtn-" + _0x5aebbd[doge.state.activeTab]).classList.remove("cheatTabActive"), document.getElementById("cheat-tab-" + _0x5aebbd[doge.state.activeTab]).style.display = "none", _0x2745e1.classList.add("cheatTabActive"), document.getElementById("cheat-tab-" + _0x3839b2).style.display = "block", doge.state.activeTab = _0x5aebbd.indexOf(_0x3839b2);
          }, _0x2d73bc += '<table style="width: 100%; margin-bottom: 30px"><tr>';
          for (let _0x370222 = 0; _0x370222 < _0x5aebbd.length; _0x370222++) {
            const _0x25bd49 = _0x5aebbd[_0x370222];
            _0x2d73bc += '<td id="cheat-tabbtn-' + _0x25bd49 + '" onclick="' + this.hash + '.GUI.changeTab(this)" class="cheatTabButton ' + (_0x5aebbd[doge.state.activeTab] === _0x25bd49 ? "cheatTabActive" : "") + '">', _0x2d73bc += _0x25bd49, _0x2d73bc += "</td>";
          }
          _0x2d73bc += "</table></tr>";
          function _0x2397d1(_0x2230fc, _0x2589fa) {
            _0x2d73bc += '<div style="display: ' + (doge.state.activeTab === _0x2230fc ? "block" : "none") + '" class="cheat-tab" id="cheat-tab-' + _0x5aebbd[_0x2230fc] + '">', _0x2589fa(), _0x2d73bc += "</div>";
          }
          return _0x2397d1(0, () => {
                  _0x4988fb.select("Aimbot [Y]", "aimbot", { None: 0, "Quickscope / Auto pick": 1, "Silent aimbot": 2, "Aim assist": 4, "Easy aim assist": 11, "SP Trigger bot": 12, "Silent on aim": 6, Smooth: 7, Unsilent: 10, "Unsilent on aim": 5, "Aim correction": 9 }),
                  _0x4988fb.select("Spin aimbot speed", "spinAimFrames", { 1: 30, 2: 20, 3: 15, 4: 10, 5: 5 }),
                  _0x4988fb.slider("Aim range", "aimbotRange", 0, 1e3, 10, "Set above 0 to make the aimbot pick enemies only at the selected range"),

                  //_0x4988fb.slider("Aim offset", "aimOffset", -4, 1, 0.1, "The lower it is, the lower the aimbot will shoot (0 - head, -4 - body)"),
                  _0x4988fb.select("Aimbone [Beta]", "aimOffset", { "Lower Boddy": -4, "Upper Body": -3, "Torso": -2, "Neck": -1, "Mid Head": 0.3, "Upper Head": 1 }),

                  _0x4988fb.slider("Aim noise", "aimNoise", 0, 2, 0.005, "The higher it is, the lower is the aimbot accuracy"),
                  _0x4988fb.checkbox("Supersilent aim", "superSilent", "Only works with quickscope and silent aim, makes it almost invisible that you're looking at somebody when you're shooting at him"),
                  _0x4988fb.checkbox("Aim at AIs", "AImbot", "Makes the aimbot shoot at NPCs"),
                  _0x4988fb.checkbox("FOV check", "frustumCheck", "Makes you only shoot at enemies that are in your field of view. Prevents 180 flicks"),
                  _0x4988fb.checkbox("FOV box", "fovbox", "Creates a box in which enemies can be targetted, enable with FOV check"),
                  _0x4988fb.select("FOV box size", "fovBoxSize", { Big: 1, Medium: 2, Small: 3 }),
                  _0x4988fb.checkbox("Wallbangs", "wallbangs", "Makes the aimbot shoot enemies behind walls"),
                  _0x4988fb.checkbox("Aimbot range check", "rangeCheck", "Checks if the enemy is in range of your weapon before shooting it, disable for rocket launcher"),
                  _0x4988fb.checkbox("Auto reload", "autoReload", "Automatically reloads your weapon when it's out of ammo"),
                  _0x4988fb.checkbox("Prevent melee throwing", "preventMeleeThrowing", "Prevents you from throwing your knife");
              //////END AIMBOT TAB
          }), _0x2397d1(1, () => {
              _0x4988fb.select("ESP [H]", "esp", { None: 0, Nametags: 1, "Box ESP": 2, "Full ESP": 3 }),
                  _0x4988fb.select("ESP Font Size", "espFontSize", { "30px": 30, "25px": 25, "20px": 20, "15px": 15, "10px": 10, "5px": 5 }),
                  _0x4988fb.select("Tracers", "tracers", { None: 0, Bottom: 1, Middle: 2 }, "Draws lines to players"),
                  _0x4988fb.checkbox("Mark aimbot target", "markTarget", "Shows who is the aimbot targetting at the time, useful for aim assist/aim correction"),
                  _0x4988fb.checkbox("Draw FOV box", "drawFovbox", "Draws the FOV box from aimbot settings"),
                  _0x4988fb.checkbox("Chams", "chams"),
                  _0x4988fb.select("Chams colour", "chamsCol", { White: 0, Black: 1, Purple: 2, Pink: 3, Blue: 4, DarkBlue: 5, Aqua: 6, Green: 7, Lime: 8, Orange: 9, Yellow: 10, Red: 11, Gaybow: 12 }),
                  _0x4988fb.checkbox("Friendly chams", "teamChams", "Show Chams for friendly players"),
                  _0x4988fb.checkbox("Wireframe", "wireframe"),
                  _0x4988fb.slider("RGB interval", "chamsInterval", 50, 1e3, 50, "How fast will the RGB chams change colour");
              ///////END ESP TAB
          }), _0x2397d1(2, () => {
              _0x4988fb.checkbox("Third person mode", "thirdPerson"),
                  _0x4988fb.checkbox("Skin hack", "skinHack", "Makes you able to use any skin in game, only shows on your side"),
                  _0x4988fb.checkbox("Billboard shaders", "animatedBillboards", "Disable if you get fps drops"),
                  _0x4988fb.checkbox("Any weapon trail", "alwaysTrail"),
                  _0x4988fb.slider("Weapon Zoom", "weaponZoom", 0, 20, 0.1, "Weapon Zoom Multiplier Adjust");
              ////// END OF VISUALS TAB
          }), _0x2397d1(3, () => {
              _0x4988fb.checkbox("Always aim", "alwaysAim", "Makes you slower and jump lower, but the aimbot can start shooting at enemies  faster. Only use if ur good at bhopping"),
                  _0x4988fb.checkbox("Aim when target visible", "awtv"),
                  _0x4988fb.checkbox("Unaim when no target visible", "uwtv"),
                  _0x4988fb.checkbox("Force unsilent", "forceUnsilent");
              //////END OF EXPLOITS TAB
          }), _0x2397d1(4, () => {
              _0x4988fb.select("Auto bhop", "bhop", { None: 0, "Auto Jump": 1, "Key Jump": 2, "Auto Slide": 3, "Key Slide": 4 }),
                  _0x4988fb.label("Only use with silent aim"),
                  _0x4988fb.select("Pitch hax", "pitchHack", { Disabled: 0, Downward: 1, Upward: 2, "sin(time)": 3, "sin(time/5)": 4, double: 5, random: 6 }, "Only use with aimbot on"),
                  _0x4988fb.checkbox("Spin bot", "spinBot");
          }), _0x2397d1(5, () => {
                  _0x4988fb.nobrlabel("Restart is required after changing any of these settings"),
                  _0x4988fb.checkbox("Show GUI button", "showGuiButton", "Disable if you don't want the dog under settings to be visible"),
                  _0x4988fb.checkbox("GUI on middle mouse button", "guiOnMMB", "Makes it possible to open this menu by clicking the mouse wheel"),
                  _0x4988fb.checkbox("Keybinds", "keybinds", "Turn keybinds on/off, Aimbot - Y, ESP - H"),
                  _0x4988fb.checkbox("No inactivity kick", "antikick", "Disables the 'Kicked for inactivity' message (client side, but works)"),
                  _0x4988fb.checkbox("Auto nuke", "autoNuke", "Automatically nukes when you are able to"),
                  _0x4988fb.br(),
                  _0x4988fb.client_setting("Uncap FPS", "uncap_fps", "Disables V-Sync"),
                  _0x4988fb.client_setting("Adblock", "adblock", "Disables ads");
                  _0x4988fb.checkbox("Force nametags on", "fgno", "Use in custom games with disabled nametags"), 
                  _0x4988fb.input("Custom CSS", "customCSS", "url", "", "URL to CSS file");

              //// ENF OF THE TAB
          }), doge.isClient && _0x2397d1(6, () => {
              _0x4988fb.nobrlabel("Restart is required after changing any of these settings"),
                  _0x4988fb.br(),
                  _0x4988fb.client_setting("Uncap FPS", "uncap_fps", "Disables V-Sync"),
                  _0x4988fb.client_setting("Adblock", "adblock", "Disables ads");
          }), _0x2d73bc += "</div>", _0x2d73bc;
        }
        ["getDistance"](_0x3f5822, _0x5bd97d, _0x2de0cf, _0x29bc32) {
          return Math.sqrt((_0x2de0cf -= _0x3f5822) * _0x2de0cf + (_0x29bc32 -= _0x5bd97d) * _0x29bc32);
        }
        ["getDistance3D"](_0x2838f2, _0x27e512, _0x51986e, _0x49d3ec, _0x522230, _0x48c182) {
          let _0x28c68e = _0x2838f2 - _0x49d3ec, _0x20f13f = _0x27e512 - _0x522230, _0x377051 = _0x51986e - _0x48c182;
          return Math.sqrt(_0x28c68e * _0x28c68e + _0x20f13f * _0x20f13f + _0x377051 * _0x377051);
        }
        ["getXDir"](_0x14c454, _0x49c342, _0x2f3491, _0x3fd080, _0x5598e8, _0x32043a) {
          let _0x460c8b = Math.abs(_0x49c342 - _0x5598e8), _0x10f4c3 = this.getDistance3D(_0x14c454, _0x49c342, _0x2f3491, _0x3fd080, _0x5598e8, _0x32043a);
          return Math.asin(_0x460c8b / _0x10f4c3) * (_0x49c342 > _0x5598e8 ? -1 : 1);
        }
        ["getDir"](_0x4d303c, _0x46b98c, _0x1cd6a0, _0x1dede8) {
          return Math.atan2(_0x46b98c - _0x1dede8, _0x4d303c - _0x1cd6a0);
        }
        ["getAngleDist"](_0x4c405f, _0x637d75) {
          return Math.atan2(Math.sin(_0x637d75 - _0x4c405f), Math.cos(_0x4c405f - _0x637d75));
        }
        ["containsPoint"](_0x316dd4) {
          let _0x1fc10f = this.renderer.frustum.planes;
          for (let _0x144e30 = 0; _0x144e30 < 6; _0x144e30++) {
            if (_0x1fc10f[_0x144e30].distanceToPoint(_0x316dd4) < 0) return false;
          }
          return true;
        }
        ["world2Screen"](_0x2f77bb, _0x9186e6, _0x11d870, _0x2d51e6 = 0) {
          return _0x2f77bb.y += _0x2d51e6, _0x2f77bb.project(this.renderer.camera), _0x2f77bb.x = (_0x2f77bb.x + 1) / 2, _0x2f77bb.y = (-_0x2f77bb.y + 1) / 2, _0x2f77bb.x *= _0x9186e6, _0x2f77bb.y *= _0x11d870, _0x2f77bb;
        }
        ["isType"](_0x2461db, _0x12e5b4) {
          return typeof _0x2461db === _0x12e5b4;
        }
        ["isDefined"](_0x4ad5f7) {
          return !this.isType(_0x4ad5f7, "undefined") && _0x4ad5f7 !== null;
        }
        ["arrayTest"](_0x37b6ca, _0x26f77a, _0x341772) {
          return _0x26f77a.some(_0x3c393c => _0x341772(_0x3c393c));
        }
        ["createElement"](_0x156cce, _0x3b3e7e, _0x27a92d) {
          let _0x2deca3 = document.createElement(_0x156cce);
          if (_0x27a92d) _0x2deca3.id = _0x27a92d;
          return _0x2deca3.innerHTML = _0x3b3e7e, _0x2deca3;
        }
        ["createObserver"](_0x2de45c, _0x59f37c, _0x1ee4eb, _0x1bb737 = true) {
          return new MutationObserver((_0x429c83, _0x2aa697) => {
            (_0x59f37c == "src" || _0x1bb737 && _0x429c83[0].target.style.display == "block" || !_0x1bb737) && _0x1ee4eb(_0x429c83[0].target);
          }).observe(_0x2de45c, _0x59f37c == "childList" ? {childList: true} : {attributes: true, attributeFilter: [_0x59f37c]});
        }
        ["genHash"](_0x6ca4ce) {
          return [...Array(_0x6ca4ce)].map(_0x11bd55 => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[~~(Math.random() * 52)]).join("");
        }
        ["saveAs"](_0x2750ca, _0x2b494d) {
          let _0x30a322 = new Blob([_0x2b494d], {type: "text/plain"}), _0xef0973 = window.document.createElement("a");
          _0xef0973.href = window.URL.createObjectURL(_0x30a322), _0xef0973.download = _0x2750ca, window.document.body.appendChild(_0xef0973), _0xef0973.click(), window.document.body.removeChild(_0xef0973);
        }
        async ["store"](_0x3eb390) {
          const _0x166020 = "dogeware";
          switch (_0x3eb390) {
            case "get":
              return GM.getValue(_0x166020).then(_0x416d54 => this.isDefined(_0x416d54) ? JSON.parse(_0x416d54) : this.settings);
            case "set":
              return GM.setValue(_0x166020, JSON.stringify(this.settings));
            case "reset":
              return GM.deleteValue(_0x166020);
          }
        }
        async ["waitFor"](_0x58f2a3, _0x20bcc6 = Infinity, _0x171421 = null) {
          let _0x3b632b = _0x15456b => new Promise(_0x1eed50 => setTimeout(_0x1eed50, _0x15456b));
          return new Promise(async (_0xf5894, _0x239fda) => {
            if (typeof _0x20bcc6 != "number") _0x239fda("Timeout argument not a number in waitFor(selector, timeout_ms)");
            let _0x49fc60, _0x39d2e3 = 100;
            while (_0x49fc60 === undefined || _0x49fc60 === false || _0x49fc60 === null || _0x49fc60.length === 0) {
              if (_0x171421 && _0x171421 instanceof Function) _0x171421();
              ;
              if (_0x20bcc6 % 1e4 < _0x39d2e3) console.log("waiting for: ", _0x58f2a3);
              if ((_0x20bcc6 -= _0x39d2e3) < 0) {
                console.log("Timeout : ", _0x58f2a3), _0xf5894(false);
                return;
              }
              await _0x3b632b(_0x39d2e3), _0x49fc60 = typeof _0x58f2a3 === "string" ? Function(_0x58f2a3)() : _0x58f2a3();
            }
            console.log("Passed : ", _0x58f2a3), _0xf5894(_0x49fc60);
          });
        }
      }
      ;
      const doge = new Dogeware;
    };
  }
  return _res;
};
