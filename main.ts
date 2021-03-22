namespace SpriteKind {
    export const Wall = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(otherSprite)) {
        mySprite.setVelocity(0, -120)
    }
})
let mySprite: Sprite = null
let otherSprite: Sprite = null
otherSprite = sprites.create(assets.image`myImage0`, SpriteKind.Wall)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay += 300
mySprite.setStayInScreen(true)
