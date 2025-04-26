let water: int32 = 0
const highest: int32 = 60
const lowest: int32 = 20

OLED.init(128, 64)

basic.forever(function () {
    water = tinkercademy.MoistureSensor(AnalogPin.P0)

    OLED.clear()

    OLED.writeString("water: ")
    OLED.writeNumNewLine(water)

    OLED.writeString("status: ")
    if (lowest > water) {
        OLED.writeString("Too little")
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
        `)
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
    }
    else if (highest < water) {
        OLED.writeString("Too much")
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
        `)
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
    else {
        OLED.writeString("Just right")
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
        `)
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
    basic.pause(1000)
})
