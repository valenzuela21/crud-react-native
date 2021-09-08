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
 or
 export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"
```
run your project again react-native run-android


## Emulathor App Android in Dispositive

```
adb devices
adb -s RFXNW19314000305 reverse tcp:8081 tcp8081
npx react-native run-android
```
## Other Command Device Android

```
npx react-native run-android --deviceId= 'myDeviceId'
sudo vim ~/.zshrc

Execute:
. ~/.zshrc

```

[More Adb Devices Command](https://www.flipandroid.com/no-se-puede-acceder-a-adb-en-os-x-a-travs-de-terminal-command-not-found.html)<br>
[More Info Install Aditional](https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found)<br>
[More React Native Oficial](https://doc.ebichu.cc/react-native/releases/0.44/docs/android-building-from-source.html)<br>
[More React Native Sdk Config Console](https://stackoverflow.com/questions/55677874/failed-to-launch-emulator-error-emulator-didnt-connect-within-60-seconds)<br>

## Library Start Featured
https://swmansion.com/community/open-source/
