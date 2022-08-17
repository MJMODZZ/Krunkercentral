const isSkidLamerAHypocrite = true;

class Dogeware {
    constructor() {

        this.hash=this.genHash(8),
            window[this.hash]=this,
            this.settings=Object.assign( {}

                , {
                    aimbot:0, superSilent: !1, AImbot: !1, frustumCheck: !1, weaponZoom:1, wallbangs: !1, alwaysAim: !1, pitchHack:0, thirdPerson: !1, autoReload: !1, speedHack: !1, rangeCheck: !1, alwaysTrail: !1, spinAimFrames:10, animatedBillboards: !1, esp:0, espFontSize:10, tracers: !1, showGuiButton: !0, awtv: !1, uwtv: !1, forceUnsilent: !1, bhop:0, spinBot: !1, markTarget: !0, skinHack: !1, aimOffset:0, aimNoise:0, keybinds: !0, antikick: !0, fovbox: !1, drawFovbox: !1, fovBoxSize:1, guiOnMMB: !1, hideAdverts: !1, hideStreams: !1, hideMerch: !1, hideNewsConsole: !1, hideCookieButton: !1, chams: !1, chamsCol:1, wireframe: !1, customCSS:"", teamChams: !1, autoNuke: !1, chamsInterval:500, preventMeleeThrowing: !1, forceNametagsOn: !1, aimbotRange:0, autoServer: !0
                }

            ),
            this.state=Object.assign( {}

                , {
                    bindAimbotOn: !0, quickscopeCanShoot: !0, spinFrame:0, pressedKeys:new Set, spinCounter:0, activeTab:0, nameTags: !1, frame:0
                }

            ),
            this.gaybow=0,
            this.colors= {
                White: "#FFFFFF", Black:"#000000", Purple:"#9400D3", Pink:"#FF1493", Blue:"#1E90FF", DarkBlue:"#0000FF", Aqua:"#00FFFF", Green:"#008000", Lime:"#7FFF00", Orange:"#FF8C00", Yellow:"#FFFF00", Red:"#FF0000"
            }

            ,
            this.isProxy=Symbol("isProxy"),
            this.GUI= {}

        ;

        try {
            this.onLoad()
        }

        catch(e) {
            console.error("ERROR "+e.name),
                console.error(e.message),
                console.log(e.stack)
        }
    }

    onLoad() {
        this.defines(), this.createListeners()
    }

    defines() {
        // GM.registerMenuCommand("Reset DogeWare", ()=> {
        //         confirm("Are You Sure?")&&this.deleteSettings()
        //     }
        //
        // );
        const e=Symbol("origSkins"),
            t=Symbol("localSkins");

        Object.defineProperties(Object.prototype, {
                canvas: {
                    set(e) {
                        this._canvas=e, "game-overlay"==e.id&&(doge.overlay=this, doge.ctx=e.getContext("2d"), Object.defineProperties(this, {
                                render: {
                                    set(e) {
                                        this._render=new Proxy(e, {
                                                apply(e, t, s) {
                                                    if(["scale", "game", "controls", "renderer", "me"].forEach((e, t)=> {
                                                            doge[e]=s[t]
                                                        }

                                                    ), Reflect.apply(...arguments), doge.isDefined(doge.renderer)&&doge.isDefined(doge.renderer.adsFovMlt))try {
                                                        for(let e in doge.renderer.adsFovMlt)e=doge.settings.weaponZoom
                                                    }

                                                    catch(e) {
                                                        console.error(e)
                                                    }

                                                    doge.me&&doge.ctx&&(doge.ctx.save(), doge.ctx.scale(doge.scale, doge.scale), doge.render(), doge.ctx.restore(),  !doge.me.procInputs[doge.isProxy]&&(doge.me.procInputs=new Proxy(doge.me.procInputs, {
                                                            apply(e, t, [s, i, o, n]) {
                                                                return t&&doge.inputs(s), Reflect.apply(...arguments)
                                                            }

                                                            , get:(e, t)=>t===doge.isProxy||Reflect.get(e, t)
                                                        }

                                                    )), doge.game.map.manager.objects.filter(e=>e.penetrable).map((e, t, s)=> {
                                                            e.transparent=doge.settings.wallbangs
                                                        }

                                                    ))
                                                }
                                            }

                                        )
                                    }

                                    , get() {
                                        return this._render
                                    }
                                }
                            }

                        ))
                    }

                    , get() {
                        return this._canvas
                    }
                }

                , OBJLoader: {
                    set(e) {
                        doge.three=this, this._value=e
                    }

                    , get() {
                        return this._value
                    }
                }

                , skins: {
                    set(s) {
                        return this[e]=s, (null==this.localSkins|| !this.localSkins.length)&&(this[t]=Array.apply(null, Array(5e3)).map((e, t)=>( {
                                ind:t, cnt:1
                            }

                        ))), s
                    }

                    , get() {
                        return doge.settings.skinHack&&this.stats?this[t]:this[e]
                    }
                }

                , useLooseClient: {
                    enumerable: !1, get() {
                        return this._ulc
                    }

                    , set(e) {
                        doge.config=this, Object.defineProperty(this, "nameVisRate", {
                                value:0, writable: !1, configurable: !0
                            }

                        ), this._ulc=e
                    }
                }

                , trail: {
                    enumerable: !1, get() {
                        return doge.settings.alwaysTrail||this._trail
                    }

                    , set(e) {
                        this._trail=e
                    }
                }

                , showTracers: {
                    enumerable: !1, get() {
                        return doge.settings.alwaysTrail||this._showTracers
                    }

                    , set(e) {
                        this._showTracers=e
                    }
                }

                , shaderId: {
                    enumerable: !1, get() {
                        return this.src&&this.src.startsWith("pubs/")&&doge.settings.animatedBillboards?1:this.rshaderId
                    }

                    , set(e) {
                        this.rshaderId=e
                    }
                }

                , idleTimer: {
                    enumerable: !1, get() {
                        return doge.settings.antikick?0:this._idleTimer
                    }

                    , set(e) {
                        this._idleTimer=e
                    }
                }

                , kickTimer: {
                    enumerable: !1, get() {
                        return doge.settings.antikick?1/0:this._kickTimer
                    }

                    , set(e) {
                        this._kickTimer=e
                    }
                }

                , cnBSeen: {
                    set(e) {
                        this.inView=e
                    }

                    , get() {
                        let e= !doge.isDefined(doge.me)|| !doge.me.team||doge.me.team !=this.team; return this.inView||e&&doge.state.nameTags
                    }
                }

                , events: {
                    set(e) {
                        0==this.ahNum&&(doge.wsSend=this.send.bind(this), doge.wsEvent=this._dispatchEvent.bind(this), doge.socket=this, this.send=new Proxy(this.send, {
                                apply(e, t, [s, i]) {
                                    return"en"===s&&(doge.skins= {
                                            main:i[2][0], secondary:i[2][1], hat:i[3], body:i[4], knife:i[9], dye:i[14], waist:i[17]
                                        }

                                    ), Reflect.apply(...arguments)
                                }
                            }

                        ), this._dispatchEvent=new Proxy(this._dispatchEvent, {
                                apply(e, t, [s, i]) {
                                    if(doge.settings.skinHack&&"0"===s) {
                                        let e=i[0], t=38; for(; e.length%t !=0; )t++; for(let s=0; s<e.length; s+=t)e[s+12]=[doge.skins.main, doge.skins.secondary], e[s+13]=doge.skins.hat, e[s+14]=doge.skins.body, e[s+19]=doge.skins.knife, e[s+24]=doge.skins.dye, e[s+33]=doge.skins.waist
                                    }

                                    return Reflect.apply(...arguments)
                                }
                            }

                        )), this._events=e
                    }

                    , get() {
                        return this._events
                    }
                }

                , thirdPerson: {
                    get:()=>doge.settings.thirdPerson
                }
            }

        )
    }

    createListeners() {
        window.addEventListener("load", e=> {
                const t=["#aContainer, #aHolder, #endAContainer, #aMerger, #onetrust-consent-sdk { display: none !important; }", "#chatList * { user-select: text; }"]; new Array(...document.styleSheets).map(e=> {
                    if(e.href) {
                        let s=/http.*?krunker.io\/css\/(\w+.css).+/.exec(e.href); if(s&&s[1]) {
                            let i=s[1]; i&&i.includes("main_custom")&&t.forEach((t, s, i)=> {
                                    e.insertRule(t)
                                }

                            )
                        }
                    }
                }

                ), this.customCSS(), this.waitFor(()=>window.instructionsUpdate).then(e=> {
                    this.createObserver(e, "style", e=> {
                            "krunker.io"==location.host&&e.textContent.includes("Connection Banned")?location.assign("https://browserfps.com/"):this.settings.autoServer&&this.arrayTest(e, ["Kicked", "Banned", "Disconnected", "Error", "Game is full"], t=>e.innerHTML.includes(t))&&(location=document.location.origin)
                        }

                    )
                }

                ), this.waitFor(e=>this.isDefined(window.windows)).then(e=> {
                    this.loadSettings(), this.initGUI()
                }

                )
            }

        ),
            window.addEventListener("mouseup", e=> {
                    2===e.which&&doge.settings.guiOnMMB&&(e.preventDefault(), doge.showGUI())
                }

            ),
            window.addEventListener("keyup", e=> {
                    if(this.state.pressedKeys.has(e.code)&&this.state.pressedKeys.delete(e.code), "INPUT" !==document.activeElement.tagName&&(window.endUI|| !window.endUI.style.display)&&doge.settings.keybinds)switch(e.code) {
                        case"KeyY":this.state.bindAimbotOn= !this.state.bindAimbotOn, this.wsEvent("ch", [null, "Aimbot "+(this.state.bindAimbotOn?"on":"off"), 1]); break; case"KeyH":this.settings.esp=(this.settings.esp+1)%4, this.wsEvent("ch", [null, "ESP: "+["disabled", "nametags", "box", "full"][this.settings.esp], 1])
                    }
                }

            ),
            window.addEventListener("keydown", e=> {
                    if("F1"==e.code&&(e.preventDefault(), doge.showGUI()), "INPUT" !=document.activeElement.tagName&&(window.endUI|| !window.endUI.style.display))switch(e.code) {
                        case"NumpadSubtract":document.exitPointerLock(), console.dirxml(this); break; default:this.state.pressedKeys.has(e.code)||this.state.pressedKeys.add(e.code)
                    }
                }

            )
    }

    loadSettings() {
        let e= {}

        ;

        try {
            e=JSON.parse(window.localStorage.getItem("dogeware"))
        }

        catch(t) {
            let s=document.cookie.split(";");

            for(let t of s)if(0==(t=t.trim()).indexOf("dogeware=")) {
                e=JSON.parse(decodeURIComponent(t.substring("dogeware=".length, t.length)));
                break
            }
        }

        for(let t in e)null !=this.settings[t]&&(this.settings[t]=e[t]);
        this.saveSettings( !0)
    }

    deleteSettings() {
        try {
            window.localStorage.removeItemonload("dogeware"),
                location.reload()
        }

        catch(e) {}
    }

    saveSettings(e) {
        try {
            window.localStorage.setItem("dogeware", JSON.stringify(this.settings))
        }

        catch(e) {
            let t=new Date;
            t.setTime(t.getTime()+31104e6);
            let s="expires="+t.toGMTString();
            document.cookie="dogeware="+encodeURIComponent(JSON.stringify(this.settings))+"; "+s
        }

        e&&console.log("[Dogeware] Settings loaded：", this.settings)
    }

    inputs(e) {
        const t=0,
            s=2,
            i=3,
            o=4,
            n=5,
            a=6,
            r=8;

        if(this.state.frame=e[t], this.state.nameTags=[1, 2].some(e=>e==this.settings.esp)||this.settings.forceNametagsOn, this.me) {
            if(this.settings.autoNuke&&Object.keys(this.me.streaks).length&&this.wsSend("k", 0), this.settings.bhop&&(this.state.pressedKeys.has("Space")||this.settings.bhop%2)&&(this.controls.keys[this.controls.binds.jump.val]^=1, this.controls.keys[this.controls.binds.jump.val]&&(this.controls.didPressed[this.controls.binds.jump.val]=1), (this.state.pressedKeys.has("Space")||3==this.settings.bhop)&&this.me.yVel<-.03&&this.me.canSlide&&(setTimeout(()=> {
                    this.controls.keys[this.controls.binds.crouch.val]=0
                }

                , this.me.slideTimer||325), this.controls.keys[this.controls.binds.crouch.val]=1, this.controls.didPressed[this.controls.binds.crouch.val]=1)), this.settings.forceNametagsOn)try {
                Object.defineProperty(this.game.config, "nameTags", {
                        get() {
                            return !doge.settings.forceNametagsOn&&this.game._nametags
                        }

                        , set(e) {
                            this.game._nametags=e
                        }
                    }

                )
            }

            catch(e) {}

            if(this.settings.spinBot) {
                const s=1;
                -1 !==e[o]&&(e[o]=(e[o]+this.state.spinCounter-Math.round(e[i]/(2e3*Math.PI)*7))%7),
                    e[i]=this.state.spinCounter/7*(2e3*Math.PI),
                e[t]%s==0&&(this.state.spinCounter=(this.state.spinCounter+1)%7)
            }

            if(this.settings.autoReload&&0===this.me.ammos[this.me.weaponIndex]&&(e[r]=1), this.settings.pitchHack)switch(this.settings.pitchHack) {
                case 1: e[s]=500*-Math.PI;
                    break;
                case 2: e[s]=500*Math.PI;
                    break;
                case 3: e[s]=Math.sin(Date.now()/50)*Math.PI*500;
                    break;
                case 4: e[s]=Math.sin(Date.now()/250)*Math.PI*500;
                    break;
                case 5: e[s]=e[t]%2?500*Math.PI:500*-Math.PI;
                    break;
                case 6: e[s]=1e3*(Math.random()*Math.PI-Math.PI/2)
            }

            const h=()=>(2*Math.random()-1)*this.settings.aimNoise;

            if(this.game.players.list.forEach(e=> {
                    e.pos= {
                        x:e.x, y:e.y, z:e.z
                    }

                        , e.npos= {
                        x:e.x+h(), y:e.y+h(), z:e.z+h()
                    }

                        , e.isTarget= !1
                }

            ), this.game.AI.ais&&this.game.AI.ais.forEach(e=>e.npos=e.pos= {
                    x:e.x, y:e.y, z:e.z
                }

            ), this.renderer&&this.renderer.frustum&&this.me.active) {
                this.controls.target=null;
                let t=this.game.players.list.filter(e=> !e.isYTMP&&e.hasOwnProperty("npos")&&( !this.settings.frustumCheck||this.containsPoint(e.npos))&&(null===this.me.team||e.team !==this.me.team)&&e.health>0&&e.inView).sort((e, t)=>this.getDistance(this.me.x, this.me.z, e.npos.x, e.npos.z)-this.getDistance(this.me.x, this.me.z, t.npos.x, t.npos.z)),
                    o=t[0];

                if(this.settings.fovbox) {
                    const e=this.scale||parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1]),
                        s=innerWidth/e,
                        i=innerHeight/e;
                    let n= !1;

                    for(let e=0; e<t.length; e++) {
                        const a=t[e],
                            r=this.world2Screen(new this.three.Vector3(a.x, a.y, a.z), s, i, a.height/2);
                        let h=[s/3,
                            i/4,
                            s*(1/3),
                            i/2];

                        switch(this.settings.fovBoxSize) {
                            case 2: h=[.4*s, i/3, .2*s, i/3];
                                break;
                            case 3: h=[.45*s, .4*i, .1*s, .2*i]
                        }

                        if(r.x>=h[0]&&r.x<=h[0]+h[2]&&r.y>=h[1]&&r.y<h[1]+h[3]) {
                            o=t[e],
                                n= !0;
                            break
                        }
                    }

                    !n&&(o=void 0)
                }

                let r= !1;

                if(this.game.AI.ais&&this.settings.AImbot) {
                    let e=this.game.AI.ais.filter(e=>e.mesh&&e.mesh.visible&&e.health&&e.pos&&e.canBSeen).sort((e, t)=>this.getDistance(this.me.x, this.me.z, e.pos.x, e.pos.z)-this.getDistance(this.me.x, this.me.z, t.pos.x, t.pos.z)).shift();
                    ( !o||e&&this.getDistance(this.me.x, this.me.z, e.pos.x, e.pos.z)>this.getDistance(this.me.x, this.me.z, o.pos.x, o.pos.z))&&(o=e, r= !0)
                }

                const h=e[n];

                if(o&&this.settings.aimbot&&this.state.bindAimbotOn&&( !this.settings.aimbotRange||this.getDistance3D(this.me.x, this.me.y, this.me.z, o.x, o.y, o.z)<this.settings.aimbotRange)&&( !this.settings.rangeCheck||this.getDistance3D(this.me.x, this.me.y, this.me.z, o.x, o.y, o.z)<=this.me.weapon.range)&& !this.me.reloadTimer) {
                    this.settings.awtv&&(e[a]=1),
                        o.isTarget=this.settings.markTarget;
                    const t=1e3*(this.getDir(this.me.z, this.me.x, o.npos.z, o.npos.x)||0),
                        c=r?1e3*((this.getXDir(this.me.x, this.me.y, this.me.z, o.npos.x, o.npos.y-o.dat.mSize/2, o.npos.z)||0)-.3*this.me.recoilAnimY): 1e3*((this.getXDir(this.me.x, this.me.y, this.me.z, o.npos.x, o.npos.y-3*o.crouchVal+3*this.me.crouchVal+this.settings.aimOffset, o.npos.z)||0)-.3*this.me.recoilAnimY);

                    switch(this.settings.forceUnsilent&&(this.controls.target= {
                        xD:c/1e3, yD:t/1e3
                    }

                        , this.controls.update(400)), this.settings.aimbot) {
                        case 1:case 2:case 5:case 6:case 9:case 10: {
                            let o=[5,
                                6,
                                9].some(e=>e==this.settings.aimbot);

                            (5===this.settings.aimbot&&e[a]||10===this.settings.aimbot)&&(this.controls.target= {
                                xD:c/1e3, yD:t/1e3
                            }

                                , this.controls.update(400)),
                            ([2, 10].some(e=>e==this.settings.aimbot)||1===this.settings.aimbot&&this.me.weapon.id)&& !this.me.weapon.melee&&(e[a]=1),
                                this.me.didShoot?(e[n]=0, this.state.quickscopeCanShoot= !1, setTimeout(()=> {
                                        this.state.quickscopeCanShoot= !0
                                    }

                                    , .85*this.me.weapon.rate)):this.state.quickscopeCanShoot&&( !o||e[a])&&( !this.me.weapon.melee&&(e[a]=1),  !this.settings.superSilent&&9 !==this.settings.aimbot&&(e[i]=t, e[s]=c), (9 !==this.settings.aimbot&&( !this.me.aimVal||this.me.weapon.noAim||this.me.weapon.melee)||9===this.settings.aimbot&&h)&&(e[i]=t, e[s]=c, e[n]=1))
                        }

                            break;

                        case 4:case 7:case 8:case 11:e[a]||11===this.settings.aimbot?(this.controls.target= {
                            xD:c/1e3, yD:t/1e3
                        }

                            , this.controls.update( {
                            4:400, 7:110, 8:70, 11:400
                        }

                            [this.settings.aimbot]), [4, 11].some(e=>e==this.settings.aimbot)&&(e[s]=c, e[i]=t), this.me.didShoot?(e[n]=0, this.state.quickscopeCanShoot= !1, setTimeout(()=> {
                                this.state.quickscopeCanShoot= !0
                            }

                            , .85*this.me.weapon.rate)):this.state.quickscopeCanShoot&&(e[this.me.weapon.melee?n:a]=1)):this.controls.target=null;
                            break;

                        case 12: {
                            if( !this.three|| !this.renderer|| !this.renderer.camera|| !this.game|| !this.game.players|| !this.game.players.list.length|| !e[a]||this.me.aimVal)break;
                            !this.state.raycaster&&(this.state.raycaster=new this.three.Raycaster, this.state.mid=new this.three.Vector2(0, 0));
                            const t=[];

                            for(let e=0; e<this.game.players.list.length; e++) {
                                let s=this.game.players.list[e];
                                s&&s.objInstances&& !s.isYTMP&&(null===this.me.team||s.team !==this.me.team)&&s.inView&&t.push(s.objInstances)
                            }

                            const s=this.state.raycaster;
                            s.setFromCamera(this.state.mid, this.renderer.camera),
                            s.intersectObjects(t,  !0).length&&(e[n]=this.me.didShoot?0:1)
                        }
                    }
                }

                else this.settings.uwtv&&(e[a]=0),
                    this.state.spinFrame=0
            }

            this.settings.alwaysAim&&(e[a]=1),
            this.settings.preventMeleeThrowing&&this.me.weapon.melee&&(e[a]=0)
        }

        return e
    }

    render() {
        var e=this.scale||parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1]);

        let t=innerWidth/e,
            s=innerHeight/e,
            i=(e, i=0)=>(e.y+=i, e.project(this.renderer.camera), e.x=(e.x+1)/2, e.y=(1-e.y)/2, e.x*=t, e.y*=s, e),
            o=(e, t, s, i, o, n)=> {
                this.ctx.save(),
                    this.ctx.lineWidth=o+2,
                    this.ctx.beginPath(),
                    this.ctx.moveTo(e, t),
                    this.ctx.lineTo(s, i),
                    this.ctx.strokeStyle="rgba(0, 0, 0, 0.25)",
                    this.ctx.stroke(),
                    this.ctx.lineWidth=o,
                    this.ctx.strokeStyle=n,
                    this.ctx.stroke(),
                    this.ctx.restore()
            }

            ,
            n=(e, t, s, i, o, n, a, r)=> {
                this.ctx.save(),
                    this.ctx.translate(~~e, ~~t),
                    this.ctx.beginPath(),
                    r?this.ctx.fillStyle=a: this.ctx.strokeStyle=a, this.ctx.rect(s, i, o, n), r?this.ctx.fill():this.ctx.stroke(), this.ctx.closePath(), this.ctx.restore()
            }

            ,
            a=e=> {
                for(let t=0; t<e.length; t++)e[t]=~~this.ctx.measureText(e[t]).width;
                return e
            }

            ,
            r=(e, t, s, i, o)=> {
                const n=this.ctx.createLinearGradient(e, t, s, i);
                for(let e=0; e<o.length; e++)n.addColorStop(e, o[e]);
                return n
            }

            ,
            h=(e, t, s, i, o)=> {
                this.ctx.save(),
                    this.ctx.translate(~~i, ~~o),
                    this.ctx.fillStyle=s,
                    this.ctx.strokeStyle="rgba(0, 0, 0, 0.5)",
                    this.ctx.font=t,
                    this.ctx.lineWidth=1,
                    this.ctx.strokeText(e, 0, 0),
                    this.ctx.fillText(e, 0, 0),
                    this.ctx.restore()
            }

        ;

        for(const e of this.game.players.list.filter(e=> !e.isYTMP&&e.active&&(e.pos= {
                x:e.x, y:e.y, z:e.z
            }

        ))) {
            const c=new this.three.Vector3(e.pos.x, e.pos.y, e.pos.z),
                l=i(c.clone()),
                d=i(c.clone(), e.height),
                m=~~(l.y-d.y),
                g=~~(.6*m),
                u=this.settings.espFontSize+"px GameFont",
                p=null===this.me.team||e.team !==this.me.team;
            if( !this.containsPoint(e.pos))continue;
            this.settings.tracers&&o(t/2, 2===doge.settings.tracers?s/2:s-1, l.x, l.y, 2, null===e.team?"#FF4444":e.team===this.me.team?"#44AAFF":"#FF4444");
            const b=e.objInstances;

            if(this.isDefined(b))if(b.visible) {
                let e=this.settings.chams;

                doge.gaybow>=360?doge.gaybow=0:doge.gaybow++,
                    b.traverse(t=> {
                            t&&"Mesh"==t.type&&this.isDefined(t.material)&&(t.hasOwnProperty(this.hash)?t.hasOwnProperty(this.hash)&&Object.defineProperty(t, "material", {
                                    get() {
                                        return e&&(p||doge.settings.teamChams)?new doge.three.MeshBasicMaterial( {
                                                color:new doge.three.Color(12==doge.settings.chamsCol?"hsl("+doge.gaybow+",100%, 50%)":Object.values(doge.colors)[doge.settings.chamsCol]), depthTest: !1, transparent: !0, fog: !1, wireframe:doge.settings.wireframe
                                            }

                                        ):this[doge.hash]
                                    }
                                }

                            ):t[this.hash]=t.material)
                        }

                    )
            }

            else Object.defineProperty(e.objInstances, "visible", {
                        value: !0, writable: !1
                    }

                );

            if(this.settings.esp>1) {
                if(e.isTarget) {
                    this.ctx.save();
                    const e=a(["TARGET"]);
                    h("TARGET", u, "#FFFFFF", d.x-e[0]/2, d.y-1.5*this.settings.espFontSize),
                        this.ctx.beginPath(),
                        this.ctx.translate(d.x, d.y+Math.abs(m/2)),
                        this.ctx.arc(0, 0, Math.abs(m/2)+10, 0, 2*Math.PI),
                        this.ctx.strokeStyle="#FFFFFF",
                        this.ctx.stroke(),
                        this.ctx.closePath(),
                        this.ctx.restore()
                }

                if(2===this.settings.esp) {
                    this.ctx.save(),
                        this.ctx.strokeStyle=null===this.me.team||e.team !==this.me.team?"#FF4444": "#44AAFF", this.ctx.strokeRect(d.x-g/2, d.y, g, m), this.ctx.restore();
                    continue
                }

                n(d.x-g/2-7, ~~d.y-1, 0, 0, 4, m+2, "#000000",  !1),
                    n(d.x-g/2-7, ~~d.y-1, 0, 0, 4, m+2, "#44FF44",  !0),
                    n(d.x-g/2-7, ~~d.y-1, 0, 0, 4, ~~((e.maxHealth-e.health)/e.maxHealth*(m+2)), "#000000",  !0),
                    this.ctx.save(),
                    this.ctx.lineWidth=4,
                    this.ctx.translate(~~(d.x-g/2), ~~d.y),
                    this.ctx.beginPath(),
                    this.ctx.rect(0, 0, g, m),
                    this.ctx.strokeStyle="rgba(0, 0, 0, 0.25)",
                    this.ctx.stroke(),
                    this.ctx.lineWidth=2,
                    this.ctx.strokeStyle=null===e.team?"#FF4444":this.me.team===e.team?"#44AAFF":"#FF4444",
                    this.ctx.stroke(),
                    this.ctx.closePath(),
                    this.ctx.restore();
                const t=~~(this.getDistance3D(this.me.x, this.me.y, this.me.z, e.pos.x, e.pos.y, e.pos.z)/10);
                this.ctx.save(),
                    this.ctx.font=u;
                const s=a(["[", t, "m]", e.level, "©", e.name]);
                this.ctx.restore();
                const i=r(0, 0, 5*s[4], 0, ["rgba(0, 0, 0, 0.25)", "rgba(0, 0, 0, 0)"]);

                if(e.level) {
                    const t=r(0, 0, 2*s[4]+s[3]+6, 0, ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.25)"]);
                    n(~~(d.x-g/2)-12-2*s[4]-s[3]-6, ~~d.y-2, 0, 0, 2*s[4]+s[3]+6, s[4]+4, t,  !0),
                        h(""+e.level, u, "#FFFFFF", ~~(d.x-g/2)-16-s[3], ~~d.y+1*s[4])
                }

                n(2+~~(d.x+g/2), ~~d.y-2, 0, 0, 5*s[4], 4*s[4]+4, i,  !0),
                    h(e.name, u, null===e.team?"#FFCDB4":this.me.team===e.team?"#B4E6FF":"#FFCDB4", d.x+g/2+4, d.y+1*s[4]),
                e.clan&&h("["+e.clan+"]", u, "#AAAAAA", d.x+g/2+8+s[5], d.y+1*s[4]),
                    h(e.health+" HP", u, "#33FF33", d.x+g/2+4, d.y+2*s[4]),
                    h(e.weapon.name, u, "#DDDDDD", d.x+g/2+4, d.y+3*s[4]),
                    h("[", u, "#AAAAAA", d.x+g/2+4, d.y+4*s[4]),
                    h(""+t, u, "#DDDDDD", d.x+g/2+4+s[0], d.y+4*s[4]),
                    h("m]", u, "#AAAAAA", d.x+g/2+4+s[0]+s[1], d.y+4*s[4])
            }
        }

        if(this.settings.fovbox&&this.settings.drawFovbox) {
            let e=[t/3,
                s/4,
                t*(1/3),
                s/2];

            switch(this.settings.fovBoxSize) {
                case 2: e=[.4*t, s/3, .2*t, s/3];
                    break;
                case 3: e=[.45*t, .4*s, .1*t, .2*s]
            }

            this.ctx.save(),
                this.ctx.strokeStyle="red",
                this.ctx.strokeRect(...e),
                this.ctx.restore()
        }
    }

    customCSS() {
        this.settings.customCSS.startsWith("http")&&this.settings.customCSS.endsWith(".css")?this.CSSres.href=this.settings.customCSS: this.CSSres=void 0
    }

    initGUI() {
        doge.GUI.setSetting=function(e, t) {
            switch(e) {
                case"customCSS": doge.settings.customCSS=t, doge.customCSS();
                    break;
                default: console.log("SET ", e, " ", t), doge.settings[e]=t
            }

            doge.saveSettings()
        }

            ,
            doge.GUI.windowIndex=window.windows.length+1,
            doge.GUI.settings= {
                aimbot: {
                    val: this.settings.aimbot
                }
            }

            ,
            doge.GUI.windowObj= {
                header: "MENU", html:"", gen:()=>doge.getGuiHtml()
            }

            ,
            Object.defineProperty(window.windows, window.windows.length, {
                    value:doge.GUI.windowObj
                }

            ),
        this.settings.showGuiButton&&function(e, t, s) {
            const i=document.querySelector("#menuItemContainer"),
                o=document.createElement("div"),
                n=document.createElement("div"),
                a=document.createElement("div");
            o.className="menuItem",
                n.className="menuItemIcon",
                a.className="menuItemTitle",
                a.innerHTML=e,
                n.style.backgroundImage='url("https://krunkercentral.com/wp-content/uploads/2021/01/KC.png")',
                o.append(n, a),
                i.append(o),
                o.addEventListener("click", s)
        }

        ("MENU", 0, ()=> {
                window.showWindow(doge.GUI.windowIndex)
            }

        )
    }

    showGUI() {
        (document.pointerLockElement||document.mozPointerLockElement)&&document.exitPointerLock(),
            window.showWindow(this.GUI.windowIndex)
    }

    getGuiHtml() {
        const e= {
                checkbox: (e, t, s="", i= !1)=>'<div class="settName" title="'+s+'">'+e+" "+(i?'<span style="color: #eb5656">*</span>':"")+'<label class="switch" style="margin-left:10px"><input type="checkbox" onclick=\''+this.hash+'.GUI.setSetting("'+t+"\", this.checked)' "+(doge.settings[t]?"checked":"")+'><span class="slider"></span></label></div>', client_setting:(e, t, s="", i= !0)=>'<div class="settName" title="'+s+'">'+e+" "+(i?'<span style="color: #eb5656">*</span>':"")+'<label class="switch" style="margin-left:10px"><input type="checkbox" onclick=\'doge_setsetting("'+t+'", this.checked?"1":"0")\' '+(doge.settings[t]?"checked":"")+'><span class="slider"></span></label></div>', select:(e, t, s, i="", o= !1)=> {
                    let n='<div class="settName" title="'+i+'">'+e+" "+(o?'<span style="color: #eb5656">*</span>':"")+"<select onchange='"+this.hash+'.GUI.setSetting("'+t+'", parseInt(this.value))\' class="inputGrey2">';
                    for(const e in s)s.hasOwnProperty(e)&&(n+='<option value="'+s[e]+'" '+(doge.settings[t]==s[e]?"selected":"")+">"+e+"</option>,");
                    return n+"</select></div>"
                }

                ,
                slider:(e, t, s, i, o, n="")=>'<div class="settName" title="'+n+'">'+e+' <input type="number" class="sliderVal" id="slid_input_'+t+'" min="'+s+'" max="'+i+'" value="'+doge.settings[t]+'" onkeypress="'+this.hash+".GUI.setSetting('"+t+"', parseFloat(this.value.replace(',', '.')));document.querySelector('#slid_input_"+t+'\').value=this.value" style="margin-right:0;border-width:0"><div class="slidecontainer" style=""><input type="range" id="slid_'+t+'" min="'+s+'" max="'+i+'" step="'+o+'" value="'+doge.settings[t]+'" class="sliderM" oninput="'+this.hash+".GUI.setSetting('"+t+"', parseFloat(this.value));document.querySelector('#slid_input_"+t+"').value=this.value\"></div></div>",
                input:(e, t, s, i, o)=>'<div class="settName" title="'+i+'">'+e+' <input type="'+s+'" name="'+s+'" id="slid_utilities_'+t+'"\n'+("color"==s?'style="float:right;margin-top:5px"':'class="inputGrey2" placeholder="'+o+'"')+'\nvalue="'+doge.settings[t]+'" oninput="'+this.hash+".GUI.setSetting('"+t+"', this.value)\"/></div>",
                label:(e, t)=>"<br><span style='color: black; font-size: 20px; margin: 20px 0'>"+e+"</span> <span style='color: dimgrey; font-size: 15px'>"+(t||"")+"</span><br>",
                nobrlabel:(e, t)=>"<span style='color: black; font-size: 20px; margin: 20px 0'>"+e+"</span> <span style='color: dimgrey; font-size: 15px'>"+(t||"")+"</span><br>",
                br:()=>"<br>",
                style:e=>"<style>"+e+"</style>"
            }

        ;

        Object.keys(e).forEach(s=> {
                const i=e[s]; e[s]=function() {
                    return t+=i.apply(this, arguments), ""
                }
            }

        );
        const s=["Weapon",
            "Wallhack",
            "Visual",
            "Tweaks",
            "Movement",
            "Other"];

        doge.isClient&&s.push("Client"),
            e.style(".cheatTabButton { color: black; background: #ddd; padding: 2px 7px; font-size: 15px; cursor: pointer; text-align: center; } .cheatTabActive { background: #bbb;}"),
            this.GUI.changeTab=function(e) {
                const t=e.innerText;
                document.getElementById("cheat-tabbtn-"+s[doge.state.activeTab]).classList.remove("cheatTabActive"),
                    document.getElementById("cheat-tab-"+s[doge.state.activeTab]).style.display="none",
                    e.classList.add("cheatTabActive"),
                    document.getElementById("cheat-tab-"+t).style.display="block",
                    doge.state.activeTab=s.indexOf(t)
            }

            ,
            t+='<table style="width: 100%; margin-bottom: 30px"><tr>';

        for(let e=0; e<s.length; e++) {
            const i=s[e];
            t+='<td id="cheat-tabbtn-'+i+'" onclick="'+this.hash+'.GUI.changeTab(this)" class="cheatTabButton '+(s[doge.state.activeTab]===i?"cheatTabActive":"")+'">',
                t+=i,
                t+="</td>"
        }

        function i(e, i) {
            t+='<div style="display: '+(doge.state.activeTab===e?"block":"none")+'" class="cheat-tab" id="cheat-tab-'+s[e]+'">',
                i(),
                t+="</div>"
        }

        return t+="</table></tr>",
            i(0, ()=> {
                    e.select("Aimbot [Y]", "aimbot", {None:0, "Quickscope / Auto pick":1, "Silent aimbot":2, "Aim assist":4, "Easy aim assist":11, "SP Trigger bot":12, "Silent on aim":6, Smooth:7, Unsilent:10, "Unsilent on aim":5, "Aim correction":9}

                    ), e.select("Spin aimbot speed", "spinAimFrames", {1:30, 2:20, 3:15, 4:10, 5:5}

                        ), e.slider("Aim range", "aimbotRange", 0, 1e3, 10, "Set above 0 to make the aimbot pick enemies only at the selected range"),

                        //e.slider("Aim offset", "aimOffset", -4, 1, .1, "The lower it is, the lower the aimbot will shoot (0 - head, -4 - body)"),
                        e.select("Aimbone [Beta]", "aimOffset", { "LowerBoddy": -4, "UpperBody": -3, "Torso": -2, "Neck": -1, "LowerHead": -0.5, "MidHead": 0, "UpperHead": 1 }
                        
                        e.slider("Aim noise", "aimNoise", 0, 2, .005, "The higher it is, the lower is the aimbot accuracy"),
                        e.checkbox("Supersilent aim", "superSilent", "Only works with quickscope and silent aim, makes it almost invisible that you're looking at somebody when you're shooting at him"),
                        e.checkbox("Aim at AIs", "AImbot", "Makes the aimbot shoot at NPCs"),
                        e.checkbox("FOV check", "frustumCheck", "Makes you only shoot at enemies that are in your field of view. Prevents 180 flicks"),
                        e.checkbox("FOV box", "fovbox", "Creates a box in which enemies can be targetted, enable with FOV check"),
                        e.select("FOV box size", "fovBoxSize", {Big:1, Medium:2, Small:3}

                        ),
                        e.checkbox("Wallbangs", "wallbangs", "Makes the aimbot shoot enemies behind walls"),
                        e.checkbox("Aimbot range check", "rangeCheck", "Checks if the enemy is in range of your weapon before shooting it, disable for rocket launcher"),
                        e.checkbox("Auto reload", "autoReload", "Automatically reloads your weapon when it's out of ammo"),
                        e.checkbox("Prevent melee throwing", "preventMeleeThrowing", "Prevents you from throwing your knife")
                }

            ),
            i(1, ()=> {
                    e.select("ESP [H]", "esp", {
                            None:0, Nametags:1, "Box ESP":2, "Full ESP":3
                        }

                    ), e.select("ESP Font Size", "espFontSize", {
                            "30px":30, "25px":25, "20px":20, "15px":15, "10px":10, "5px":5
                        }

                    ), e.select("Tracers", "tracers", {
                            None:0, Bottom:1, Middle:2
                        }

                        , "Draws lines to players"), e.checkbox("Mark aimbot target", "markTarget", "Shows who is the aimbot targetting at the time, useful for aim assist/aim correction"), e.checkbox("Draw FOV box", "drawFovbox", "Draws the FOV box from aimbot settings"), e.checkbox("Chams", "chams"), e.select("Chams colour", "chamsCol", {
                            White:0, Black:1, Purple:2, Pink:3, Blue:4, DarkBlue:5, Aqua:6, Green:7, Lime:8, Orange:9, Yellow:10, Red:11, Gaybow:12
                        }

                    ), e.checkbox("Friendly chams", "teamChams", "Show Chams for friendly players"), e.checkbox("Wireframe", "wireframe"), e.slider("RGB interval", "chamsInterval", 50, 1e3, 50, "How fast will the RGB chams change colour")
                }

            ),
            i(2, ()=> {
                    e.checkbox("Third person mode", "thirdPerson"), e.checkbox("Skin hack", "skinHack", "Makes you able to use any skin in game, only shows on your side"), e.checkbox("Billboard shaders", "animatedBillboards", "Disable if you get fps drops"), e.checkbox("Any weapon trail", "alwaysTrail"), e.slider("Weapon Zoom", "weaponZoom", 0, 20, .1, "Weapon Zoom Multiplier Adjust")
                }

            ),
            i(3, ()=> {
                    e.checkbox("Always aim", "alwaysAim", "Makes you slower and jump lower, but the aimbot can start shooting at enemies  faster. Only use if ur good at bhopping"), e.checkbox("Aim when target visible", "awtv"), e.checkbox("Unaim when no target visible", "uwtv"), e.checkbox("Force unsilent", "forceUnsilent")
                    e.checkbox("Force nametags on", "fgno", "Use in custom games with disabled nametags"),
            }

            ),
            i(4, ()=> {
                    e.select("Auto bhop", "bhop", {
                            None:0, "Auto Jump":1, "Key Jump":2, "Auto Slide":3, "Key Slide":4
                        }

                    ), e.label("Only use with silent aim"), e.select("Pitch hax", "pitchHack", {
                            Disabled:0, Downward:1, Upward:2, "sin(time)":3, "sin(time/5)":4, double:5, random:6
                        }

                        , "Only use with aimbot on"), e.checkbox("Spin bot", "spinBot")
                }

            ),
            i(5, () => {
                    e.nobrlabel("Restart is required after changing any of these settings"),
                    e.checkbox("Show GUI button", "showGuiButton", "Disable if you don't want the dog under settings to be visible"),
                    e.checkbox("GUI on middle mouse button", "guiOnMMB", "Makes it possible to open this menu by clicking the mouse wheel"),
                    e.checkbox("Keybinds", "keybinds", "Turn keybinds on/off, Aimbot - Y, ESP - H"),
                    e.checkbox("No inactivity kick", "antikick", "Disables the 'Kicked for inactivity' message (client side, but works)"),
                    e.checkbox("Auto nuke", "autoNuke", "Automatically nukes when you are able to"),
                    //e.checkbox("Force nametags on", "fgno", "Use in custom games with disabled nametags"),
                    e.br(),
                    e.client_setting("Uncap FPS", "uncap_fps", "Disables V-Sync"),
                    e.client_setting("Adblock", "adblock", "Disables ads")
                    e.input("Custom CSS", "customCSS", "url", "", "URL to CSS file")
                }

            ),
        doge.isClient&&i(6, ()=> {
                e.nobrlabel("Restart is required after changing any of these settings"), e.br(), e.client_setting("Uncap FPS", "uncap_fps", "Disables V-Sync"), e.client_setting("Adblock", "adblock", "Disables ads")
            }

        ),
            t+="</div>"
    }

    getDistance(e, t, s, i) {
        return Math.sqrt((s-=e)*s+(i-=t)*i)
    }

    getDistance3D(e, t, s, i, o, n) {
        let a=e-i,
            r=t-o,
            h=s-n;
        return Math.sqrt(a*a+r*r+h*h)
    }

    getXDir(e, t, s, i, o, n) {
        let a=Math.abs(t-o),
            r=this.getDistance3D(e, t, s, i, o, n);
        return Math.asin(a/r)*(t>o?-1:1)
    }

    getDir(e, t, s, i) {
        return Math.atan2(t-i, e-s)
    }

    getAngleDist(e, t) {
        return Math.atan2(Math.sin(t-e), Math.cos(e-t))
    }

    containsPoint(e) {
        let t=this.renderer.frustum.planes;
        for(let s=0; s<6; s++)if(t[s].distanceToPoint(e)<0)return !1;
        return !0
    }

    world2Screen(e, t, s, i=0) {
        return e.y+=i,
            e.project(this.renderer.camera),
            e.x=(e.x+1)/2,
            e.y=(1-e.y)/2,
            e.x*=t,
            e.y*=s,
            e
    }

    isType(e, t) {
        return typeof e===t
    }

    isDefined(e) {
        return !this.isType(e, "undefined")&&null !==e
    }

    arrayTest(e, t, s) {
        return t.some(e=>s(e))
    }

    createElement(e, t, s) {
        let i=document.createElement(e);
        return s&&(i.id=s),
            i.innerHTML=t,
            i
    }

    createObserver(e, t, s, i= !0) {
        return new MutationObserver((e, o)=> {
                ("src"==t||i&&"block"==e[0].target.style.display|| !i)&&s(e[0].target)
            }

        ).observe(e, "childList"==t? {
                childList: !0
            }

            : {
                attributes: !0, attributeFilter:[t]
            }

        )
    }

    genHash(e) {
        return[...Array(e)].map(e=>"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[~~(52*Math.random())]).join("")
    }

    saveAs(e, t) {
        let s=new Blob([t], {
                type:"text/plain"
            }

            ),
            i=window.document.createElement("a");
        i.href=window.URL.createObjectURL(s),
            i.download=e,
            window.document.body.appendChild(i),
            i.click(),
            window.document.body.removeChild(i)
    }

    async store(e) {
        switch(e) {
            case"get": return GM.getValue("dogeware").then(e=>this.isDefined(e)?JSON.parse(e):this.settings);
            case"set": return GM.setValue("dogeware", JSON.stringify(this.settings));
            case"reset": return GM.deleteValue("dogeware")
        }
    }

    async waitFor(e, t=1/0, s=null) {
        let i=e=>new Promise(t=>setTimeout(t, e));

        return new Promise(async(o, n)=> {
                "number" !=typeof t&&n("Timeout argument not a number in waitFor(selector, timeout_ms)"); let a; for(; void 0===a|| !1===a||null===a||0===a.length; ) {
                    if(s&&s instanceof Function&&s(), t%1e4<100&&console.log("waiting for: ", e), (t-=100)<0)return console.log("Timeout : ", e), void o( !1); await i(100), a="string"==typeof e?Function(e)():e()
                }

                console.log("Passed : ", e), o(a)
            }

        )
    }
}

const doge = new Dogeware;
