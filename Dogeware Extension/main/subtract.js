// window.chonkercheats = await(await fetch("subtract.js")).text()

const [input, game, recon, lock] = arguments, me = this, key = {
	frame: 0,
	delta: 1,
	xdir: 2,
	ydir: 3,
	moveDir: 4,
	shoot: 5,
	scope: 6,
	jump: 7,
	reload: 8,
	crouch: 9,
	weaponScroll: 10,
	weaponSwap: 11,
	moveLock: 12
}

const moveDir = {
	leftStrafe: 0,
	forward: 1,
	rightStrafe: 2,
	right: 3,
	backwardRightStrafe: 4,
	backward: 5,
	backwardLeftStrafe: 6,
	left: 7
}

cheat.state.frame = input[key.frame]
cheat.state.players = game.players
cheat.state.game = game
cheat.state.me = me
cheat.state.controls = game.controls

// AUTO NUKE
if (cheat.settings.autoNuke && me && Object.keys(me.streaks).length) {
	sendWsMessage("k", 0)
}

// BHOP
const bhop = cheat.settings.bhop
if (bhop) {
	if (cheat.state.pressedKeys.has("Space") || [1,3].includes(bhop)) {
		cheat.state.controls.keys[cheat.state.controls.binds.jumpKey.val] ^= 1
		if (cheat.state.controls.keys[cheat.state.controls.binds.jumpKey.val]) {
			cheat.state.controls.didPressed[cheat.state.controls.binds.jumpKey.val] = 1
		}
		if ([3,4].includes(bhop) && ((cheat.state.pressedKeys.has('Space') || bhop === 3) && (cheat.state.me.canSlide))) {
			setTimeout(() => {
				cheat.state.shouldCrouch = false
			}, 350)
			cheat.state.shouldCrouch = true
		}
	}
}
if (cheat.state.shouldCrouch) {
	input[key.crouch] = 1
}

// Makes nametags show in custom games, where nametags are disabled
if (cheat.settings.forceNametagsOn) {
	try {
		Object.defineProperty(game.config, "nameTags", {
			get() {
				return cheat.settings.forceNametagsOn ? false : game._nametags
			},
			set(v) {
				game._nametags = v
			}
		})
	} catch (e) {}
}


if (cheat.settings.spinBot) {
	const rate = 1
	input[key.moveDir] !== -1 && (input[key.moveDir] = (input[key.moveDir] + cheat.state.spinCounter - Math.round(7 * (input[key.ydir] / (Math.PI * 2000)))) % 7)
	input[key.ydir] = cheat.state.spinCounter/7 * (Math.PI * 2000)
	input[key.frame] % rate === 0 && (cheat.state.spinCounter = (cheat.state.spinCounter + 1) % 7)
}

// Auto swap (not working idk why)
// if (cheat.settings.autoSwap && !me.weapon.secondary && me[cheat.vars.ammos][0] === 0 && me[cheat.vars.ammos][1] > 0 && !me.swapTime && !me[cheat.vars.reloadTimer]) {
// 	input[key.weaponSwap] = 1
//}
// AUTO RELOAD
if (cheat.settings.autoReload && me[cheat.vars.ammos][me[cheat.vars.weaponIndex]] === 0) {
	input[key.reload] = 1
}

// PITCH HACK
if (cheat.settings.pitchHack) {
	switch (cheat.settings.pitchHack) {
		case 1:
			input[key.xdir] = -Math.PI*500
			break
		case 2:
			input[key.xdir] = Math.PI*500
			break
		case 3:
			input[key.xdir] = Math.sin(Date.now() / 50) * Math.PI * 500
			break
		case 4:
			input[key.xdir] = Math.sin(Date.now() / 250) * Math.PI * 500
			break
		case 5:
			input[key.xdir] = input[key.frame] % 2 ? Math.PI*500 : -Math.PI*500
			break
		case 6:
			input[key.xdir] = (Math.random() * Math.PI - Math.PI/2) * 1000
			break
	}
}

// Add the `pos` property to Players and AIs
const getNoise = () => (Math.random()*2-1)*cheat.settings.aimNoise
game.players.list.forEach(v=>{v.pos={x:v.x,y:v.y,z:v.z}; v.npos={x:v.x+getNoise(),y:v.y+getNoise(),z:v.z+getNoise()}; v.isTarget=false})
if (game.AI.ais) {
	game.AI.ais.forEach(v=>v.npos=v.pos={x:v.x,y:v.y,z:v.z})
}

// AIMBOT
if (cheat.state.renderer && cheat.state.renderer.frustum && me.active) {
	game.controls.target = null

	// Finds all the visible enemies
	const targets = game.players.list.filter(enemy =>
		!enemy.isYTMP &&
		enemy.hasOwnProperty('npos') &&
		(!cheat.settings.frustumCheck || cheat.state.renderer.frustum.containsPoint(enemy.npos)) &&
		((me.team === null || enemy.team !== me.team) && enemy.health > 0 && enemy[cheat.vars.inView])
	).sort((e, e2) => cheat.math.getDistance(me.x, me.z, e.npos.x, e.npos.z) - cheat.math.getDistance(me.x, me.z, e2.npos.x, e2.npos.z))

	let target = targets[0]
	// If there's a fov box, pick an enemy inside it instead (if there is)
	if (cheat.settings.fovbox) {
		// scale - idk why but that's needed to get working width and height
		const scale = parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1])
		const width = innerWidth/scale, height = innerHeight/scale
		function world2Screen(pos, yOffset = 0) {
			pos.y += yOffset
			pos.project(cheat.state.renderer.camera)
			pos.x = (pos.x + 1) / 2
			pos.y = (-pos.y + 1) / 2
			pos.x *= width
			pos.y *= height
			return pos
		}

		let foundTarget = false
		for (let i = 0; i < targets.length; i++) {
			const t = targets[i]
			const sp = world2Screen(new cheat.state.three.Vector3(t.x, t.y, t.z), t.height/2)
			let fovBox = [width/3, height/4, width*(1/3), height/2]
			switch (cheat.settings.fovBoxSize) {
				// medium
				case 2:
					fovBox = [width*0.4, height/3, width*0.2, height/3]
					break
				// small
				case 3:
					fovBox = [width*0.45, height*0.4, width*0.1, height*0.2]
					break
			}
			if (sp.x >= fovBox[0] && sp.x <= (fovBox[0]+fovBox[2]) && sp.y >= fovBox[1] && sp.y < (fovBox[1]+fovBox[3])) {
				target = targets[i]
				foundTarget = true
				break
			}
		}
		if (!foundTarget) {
			target = void "kpal"
		}
	}

	let isAiTarget = false
	if (game.AI.ais && cheat.settings.AImbot) {
		let aiTarget = game.AI.ais.filter(ent => ent.mesh && ent.mesh.visible && ent.health && ent.pos && ent.canBSeen).sort((p1, p2) => cheat.math.getDistance(me.x, me.z, p1.pos.x, p1.pos.z) - cheat.math.getDistance(me.x, me.z, p2.pos.x, p2.pos.z)).shift()
		if (!target || (aiTarget && cheat.math.getDistance(me.x, me.z, aiTarget.pos.x, aiTarget.pos.z) > cheat.math.getDistance(me.x, me.z, target.pos.x, target.pos.z))) {
			target = aiTarget
			isAiTarget = true
		}
	}

	const isShooting = input[key.shoot]
	if (target && cheat.settings.aimbot &&
		cheat.state.bindAimbotOn &&
		(!cheat.settings.aimbotRange || cheat.math.getD3D(me.x, me.y, me.z, target.x, target.y, target.z) < cheat.settings.aimbotRange) &&
		(!cheat.settings.rangeCheck || cheat.math.getD3D(me.x, me.y, me.z, target.x, target.y, target.z) <= me.weapon.range) &&
		!me[cheat.vars.reloadTimer]) {

		if (cheat.settings.awtv) {
			input[key.scope] = 1
		}
		target.isTarget = cheat.settings.markTarget

		const yDire = (cheat.math.getDir(me.z, me.x, target.npos.z, target.npos.x) || 0) * 1000
		const xDire = isAiTarget ?
			((cheat.math.getXDire(me.x, me.y, me.z, target.npos.x, target.npos.y - target.dat.mSize/2, target.npos.z) || 0) - (0.3 * me[cheat.vars.recoilAnimY])) * 1000 :
			((cheat.math.getXDire(me.x, me.y, me.z, target.npos.x, target.npos.y - target[cheat.vars.crouchVal] * 3 + me[cheat.vars.crouchVal] * 3 + cheat.settings.aimOffset, target.npos.z) || 0) - (0.3 * me[cheat.vars.recoilAnimY])) * 1000

		// aimbot tweak
		if (cheat.settings.forceUnsilent) {
			game.controls.target = {
				xD: xDire/1000,
				yD: yDire/1000
			}
			game.controls.update(400)
		}

		// Different aimbot modes can share the same code
		switch (cheat.settings.aimbot) {
			// quickscope, silent, trigger aim, silent on aim, aim correction, unsilent
			case 1: case 2: case 5: case 6: case 9: case 10: {
				let onAim = [5, 6, 9].includes(cheat.settings.aimbot)
				if ((cheat.settings.aimbot === 5 && input[key.scope]) || cheat.settings.aimbot === 10) {
					game.controls.target = {
						xD: xDire/1000,
						yD: yDire/1000
					}
					game.controls.update(400)
				}
				if ([2, 10].includes(cheat.settings.aimbot) || (cheat.settings.aimbot === 1 && cheat.state.me.weapon.id)) {
					!me.weapon.melee && (input[key.scope] = 1)
				}
				if ( /* me.weapon[cheat.vars.nAuto] && */ me[cheat.vars.didShoot]) {
					input[key.shoot] = 0
					cheat.state.quickscopeCanShoot = false
					setTimeout(() => {
						cheat.state.quickscopeCanShoot = true
					}, me.weapon.rate)
				} else if (cheat.state.quickscopeCanShoot && (!onAim || input[key.scope])) {
					if (!me.weapon.melee) {
						input[key.scope] = 1
					}
					if (!cheat.settings.superSilent && cheat.settings.aimbot !== 9) {
						input[key.ydir] = yDire
						input[key.xdir] = xDire
					}
					if ((cheat.settings.aimbot !== 9 && (!me[cheat.vars.aimVal] || me.weapon.noAim || me.weapon.melee)) ||
						(cheat.settings.aimbot === 9 && isShooting)) {
						input[key.ydir] = yDire
						input[key.xdir] = xDire
						input[key.shoot] = 1
					}
				}
			} break
			// spin aim useless rn
			 case 3: {
			     if (me[cheat.vars.didShoot]) {
			         input[key.shoot] = 0
			         cheat.state.quickscopeCanShoot = false
			         setTimeout(() => {
			             cheat.state.quickscopeCanShoot = true
			         }, me.weapon.rate)
			     } else if (cheat.state.quickscopeCanShoot && !cheat.state.spinFrame) {
			         cheat.state.spinFrame = input[key.frame]
			     } else {
			         const fullSpin = Math.PI * 2000
			         const spinFrames = cheat.settings.spinAimFrames
			         const currentSpinFrame = input[key.frame]-cheat.state.spinFrame
			         if (currentSpinFrame < 0) {
			             cheat.state.spinFrame = 0
			         }
			         if (currentSpinFrame > spinFrames) {
			             if (!cheat.settings.superSilent) {
			                 input[key.ydir] = yDire
			                 input[key.xdir] = xDire
			             }
			             if (!me[cheat.vars.aimVal] || me.weapon.noAim || me.weapon.melee) {
			                 input[key.ydir] = yDire
			                 input[key.xdir] = xDire
			                 input[key.shoot] = 1
			                 cheat.state.spinFrame = 0
			             }
			         } else {
			             input[key.ydir] = currentSpinFrame/spinFrames * fullSpin
			             if (!me.weapon.melee)
			                 input[key.scope] = 1
			         }
			     }
			 } break

			// aim assist, smooth on aim, smoother, easy aim assist
			case 4: case 7: case 8: case 11: {
				if (input[key.scope] || cheat.settings.aimbot === 11) {
					game.controls.target = {
						xD: xDire/1000,
						yD: yDire/1000
					}
					game.controls.update(({
						4: 400,
						7: 110,
						8: 70,
						11: 400
					})[cheat.settings.aimbot])
					if ([4,11].includes(cheat.settings.aimbot)) {
						input[key.xdir] = xDire
						input[key.ydir] = yDire
					}
					if (me[cheat.vars.didShoot]) {
						input[key.shoot] = 0
						cheat.state.quickscopeCanShoot = false
						setTimeout(() => {
							cheat.state.quickscopeCanShoot = true
						}, me.weapon.rate)
					} else if (cheat.state.quickscopeCanShoot) {
						input[me.weapon.melee ? key.shoot : key.scope] = 1
					}
				} else {
					game.controls.target = null
				}
			} break
			// trigger bot
			case 12: {
				if (!cheat.state.three ||
					!cheat.state.renderer ||
					!cheat.state.renderer.camera ||
					!cheat.state.players ||
					!cheat.state.players.list.length ||
					!input[key.scope] ||
					me[cheat.vars.aimVal]) {
					break
				}
				// Only create these once for performance
				if (!cheat.state.raycaster) {
					cheat.state.raycaster = new cheat.state.three.Raycaster()
					cheat.state.mid = new cheat.state.three.Vector2(0, 0)
				}
				const playerMaps = []
				for (let i = 0; i < cheat.state.players.list.length; i++) {
					let p = cheat.state.players.list[i]
					if (!p || !p[cheat.vars.objInstances] || p.isYTMP || !(me.team === null || p.team !== me.team) || !p[cheat.vars.inView]) {
						continue
					}
					playerMaps.push(p[cheat.vars.objInstances])
				}
				const raycaster = cheat.state.raycaster
				raycaster.setFromCamera(cheat.state.mid, cheat.state.renderer.camera)
				if (raycaster.intersectObjects(playerMaps, true).length) {
					input[key.shoot] = me[cheat.vars.didShoot] ? 0 : 1
				}
			} break
		}
	} else {
		if (cheat.settings.uwtv) {
			input[key.scope] = 0
		}
		cheat.state.spinFrame = 0
	}
}

if (cheat.settings.alwaysAim) {
	input[key.scope] = 1
}
if (cheat.settings.preventMeleeThrowing && me.weapon.melee) {
	input[key.scope] = 0
}

