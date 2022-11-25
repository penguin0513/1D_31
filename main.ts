WiFiIoT.on_wifi_connect(function (IP_Address, Device_ID) {
    basic.showIcon(IconNames.Heart)
})
WiFiIoT.on_IFTTT_conn(function (Status, Error_code) {
    OLED.clear()
    OLED.writeStringNewLine("Status:" + Status)
    OLED.writeStringNewLine("Error:" + Error_code)
})
OLED.init(128, 64)
WiFiIoT.initializeWifi(SerialPin.P16, SerialPin.P8)
WiFiIoT.setWifi("0o0o0o0o", "yipyuen24483509")
basic.forever(function () {
    if (WiFiIoT.is_wifi_connect()) {
        if (SmartCity.read_motion_sensor(AnalogPin.P1)) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.showIcon(IconNames.Ghost)
            WiFiIoT.sendIFTTT(
            "ekKXwaFHUOCLKUsA9Sn610YxNKrYrBfUZU0lb3UOYQU",
            "1D_31"
            )
        } else {
            basic.showIcon(IconNames.Square)
        }
        basic.pause(1000)
    }
})
