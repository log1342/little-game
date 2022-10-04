input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    enemy_sprite = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        enemy_sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (sprite.isTouching(enemy_sprite)) {
    	
    }
})
let enemy_sprite: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
let score = 0
basic.forever(function () {
	
})
