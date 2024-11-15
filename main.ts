namespace SpriteKind {
    export const especial = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.especial, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, player1, 200, 0)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.especial, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    sprites.destroy(sprite)
    info.changeScoreBy(1)
})
let rojo: Sprite = null
let amarillo: Sprite = null
let projectile: Sprite = null
let player1: Sprite = null
scene.setBackgroundColor(9)
player1 = sprites.create(img`
    ........................
    ............cc..........
    ............ccc.........
    ........cc..ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    ......cb55555555ff55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb13bbc.
    ...cccd55ddddd555b3335c.
    ....ccdd5ddddddd55b335c.
    .....bddddb55bdddd5555c.
    ..cccdddddb55bbbbbcccc..
    .ccccddddddb5555cbcccc..
    .cdccdddddddc555cbc55c..
    .cdddddddddddcccbbc5c...
    .cbddddddd55dbbbbccc....
    .ccbdddddd555dbbbcbc....
    ..cccddbbbd555bbccc.....
    ....ccbbbbbd555cc.......
    ......ccccbddddbc.......
    ..........cd5555dc......
    `, SpriteKind.Player)
player1.setPosition(30, 60)
controller.moveSprite(player1, 100, 100)
game.splash("PULSAR A PARA EMPEZAR")
player1.setStayInScreen(true)
player1.setBounceOnWall(true)
info.startCountdown(60)
game.onUpdateInterval(2000, function () {
    amarillo = sprites.create(img`
        ....ffffff.........ccc..
        ....ff55ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc54445555cccc445f..
        ...c9b4455555555cc455f..
        ..c999b5555555555555fc..
        .c5b99111b555555555c55c.
        c555b111995555ccccccc55f
        f555555555555c555ccfffff
        .f5555555555445555f.....
        ..ff5555555cf445555f....
        ....ffffffffff445555c...
        .........f5cfffc5555c...
        .........fcc5ffffffff...
        ..........fc5ffff.......
        ...........fffff........
        `, SpriteKind.especial)
    amarillo.setPosition(scene.screenWidth(), randint(20, 110))
    amarillo.vx = -75
})
game.onUpdateInterval(1000, function () {
    rojo = sprites.create(img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `, SpriteKind.Enemy)
    rojo.setPosition(scene.screenWidth(), randint(20, 110))
    rojo.vx = -75
})
