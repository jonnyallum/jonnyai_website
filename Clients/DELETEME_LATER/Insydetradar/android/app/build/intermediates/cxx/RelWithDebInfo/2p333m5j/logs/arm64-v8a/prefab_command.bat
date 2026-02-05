@echo off
"C:\\Program Files\\Microsoft\\jdk-17.0.17.10-hotspot\\bin\\java" ^
  --class-path ^
  "C:\\Users\\jonny\\.gradle\\caches\\modules-2\\files-2.1\\com.google.prefab\\cli\\2.1.0\\aa32fec809c44fa531f01dcfb739b5b3304d3050\\cli-2.1.0-all.jar" ^
  com.google.prefab.cli.AppKt ^
  --build-system ^
  cmake ^
  --platform ^
  android ^
  --abi ^
  arm64-v8a ^
  --os-version ^
  24 ^
  --stl ^
  c++_shared ^
  --ndk-version ^
  27 ^
  --output ^
  "C:\\Users\\jonny\\AppData\\Local\\Temp\\agp-prefab-staging3191767903972442889\\staged-cli-output" ^
  "C:\\Users\\jonny\\.gradle\\caches\\8.14.3\\transforms\\145780e1d71abfdd0f73b65783049973\\transformed\\react-android-0.81.5-release\\prefab" ^
  "C:\\Users\\jonny\\Desktop\\Jonny AI\\Clients\\New folder\\Insydetradar\\android\\app\\build\\intermediates\\cxx\\refs\\shopify_react-native-skia\\2k381l1o" ^
  "C:\\Users\\jonny\\Desktop\\Jonny AI\\Clients\\New folder\\Insydetradar\\android\\app\\build\\intermediates\\cxx\\refs\\react-native-reanimated\\2v30321q" ^
  "C:\\Users\\jonny\\Desktop\\Jonny AI\\Clients\\New folder\\Insydetradar\\android\\app\\build\\intermediates\\cxx\\refs\\react-native-worklets\\6a6t6j2q" ^
  "C:\\Users\\jonny\\.gradle\\caches\\8.14.3\\transforms\\19343859a9f0a6124130280eb42316af\\transformed\\hermes-android-0.81.5-release\\prefab" ^
  "C:\\Users\\jonny\\.gradle\\caches\\8.14.3\\transforms\\c4ed38aee617328a15ca67287b31027e\\transformed\\fbjni-0.7.0\\prefab"
