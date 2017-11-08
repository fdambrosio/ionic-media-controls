This repo is used for testing purpose. 

Ionic 3 + Ionic Native Media + Ionic Native Music Controls 

This App have to play an audio stream (in background) controlling and using it with native music controls. 

Master Branch: with latest update of  cordova-music-controls-plugin#2.1.3 the music controls works on iOS 9 - 10 - 11. 

This is based on a starter template for [Ionic] projects.

Tested with 9.3 - 10.3.1 - iOS 11

Setup

- $ npm install -g cordova ionic
- $ npm install
- $ ionic cordova platform add ios
- $ ionic cordova build ios --release
- Open /platforms/ios/TestAudio.xcarchive with XCode, enable Capabilities -> Background Modes -> "Audio"
- confirm the "Update settings" warnings on XCode

Environment:

    @ionic/cli-utils  : 1.17.0
    ionic (Ionic CLI) : 3.17.0

global packages:

    cordova (Cordova CLI) : 7.1.0

local packages:

    @ionic/app-scripts : 3.1.0
    Cordova Platforms  : ios 4.5.2
    Ionic Framework    : ionic-angular 3.8.0

System:

    ios-deploy        : 1.9.2
    ios-sim           : 6.1.2
    Node              : v6.11.4
    npm               : 5.5.1

