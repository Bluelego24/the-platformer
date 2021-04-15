namespace SpriteKind {
    export const wall = SpriteKind.create()
}
function Start () {
    mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 480
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    if (controller.A.isPressed()) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    mySprite.destroy()
    pause(100)
    Start()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Temporary asset0`, function (sprite, location) {
    if (controller.A.isPressed()) {
        mySprite.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Temporary asset1`, function (sprite, location) {
    if (controller.A.isPressed()) {
        mySprite.vy = -150
    }
})
let mySprite: Sprite = null
scene.setBackgroundColor(8)
tiles.setTilemap(tilemap`level4`)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 480
let mySprite2 = sprites.create(assets.image`myImage5`, SpriteKind.Player)
animation.runImageAnimation(
mySprite2,
[img`
    ................
    ................
    ................
    ................
    ................
    ffffffffffffffff
    f77777777777777f
    f77777777777777f
    f77711777711777f
    f77711777711777f
    f7771f7777f1777f
    f77677777777777f
    f77777f77777777f
    f66777ffff77766f
    f67666677766667f
    f66666766666666f
    f66666666666666f
    f66666666666666f
    f66666666666666f
    f66666666666666f
    ffffffffffffffff
    `,img`
    ................
    ................
    ................
    ................
    ................
    ................
    ffffffffffffffff
    f77777777777777f
    f77777777777777f
    f77711777711777f
    f77711777711777f
    f7771f7777f1777f
    f77677777777777f
    f77777f77777777f
    f66777ffff77766f
    f67666677766667f
    f66666766666666f
    f66666666666666f
    f66666666666666f
    f66666666666666f
    ffffffffffffffff
    `,img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ffffffffffffffff
    f77777777777777f
    f77711777711777f
    f77711777711777f
    f7771f7777f1777f
    f77677777777777f
    f77777f77777777f
    f66777ffff77766f
    f67666677766667f
    f66666766666666f
    f66666666666666f
    f66666666666666f
    ffffffffffffffff
    `,img`
    ................
    ................
    ................
    ................
    ................
    ffffffffffffffff
    f77777777777777f
    f77777777777777f
    f77711777711777f
    f77711777711777f
    f7771f7777f1777f
    f77677777777777f
    f77777f77777777f
    f66777ffff77766f
    f67666677766667f
    f66666766666666f
    f66666666666666f
    f66666666666666f
    f66666666666666f
    ffffffffffffffff
    ................
    `,img`
    ................
    ................
    ffffffffffffffff
    f77777777777777f
    f77777777777777f
    f77711777711777f
    f77711777711777f
    f7771f7777f1777f
    f77677777777777f
    f77777f77777777f
    f66777ffff77766f
    f67666677766667f
    f66666766666666f
    f66666666666666f
    f66666666666666f
    f66666666666666f
    f66666666666666f
    ffffffffffffffff
    ................
    ................
    ................
    `],
200,
true
)
