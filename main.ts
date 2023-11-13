input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showIcon(IconNames.SmallSquare)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    if (randint(0, 2) == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (randint(0, 2) == 1) {
        basic.showIcon(IconNames.Square)
    } else if (randint(0, 2) == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showIcon(IconNames.Square)
})
