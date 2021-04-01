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
let mySprite: Sprite = null
scene.setBackgroundColor(8)
scene.setBackgroundImage(assets.image`myImage1`)
tiles.setTilemap(tilemap`level4`)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 480
