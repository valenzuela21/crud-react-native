# Crud React Native
Note: Create archive local.properties

## Add Text:
progect_file/android/local.properties 
```bash
sdk.dir = /Users/imac/Library/Android/sdk
```

### Accept Term Android Studio SDK Command
```bash
yes | sudo ~/Library/Android/sdk/tools/bin/sdkmanager --licenses
```

### Add
Go to your project, open android folder > android/gradle.properties file > add below line 
```bash
 org.gradle.java.home=/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home // path to JDK
```
run your project again react-native run-android


## Emulathor App Android in Dispositive

```
adb devices
adb -s RFXNW19314000305 reverse tcp:8081 tcp8081
npx react-native run-android
```

[More Info](https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found)
[More React Native Official](https://doc.ebichu.cc/react-native/releases/0.44/docs/android-building-from-source.html)
