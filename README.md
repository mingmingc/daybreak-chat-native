# daybreak-native
Chat app built in React using Sendbird chat integration. Intended for clients and therapists to send messages in real time.
This is the React Native implementation for the mobile app.

## Available Scripts
First, install Expo CLI globally:

### `npm install -g expo-cli`

To install necessary packages to run the app, you can run:

### `npm install`

In the project directory, you can run:

### `expo start`

Runs the app in the development mode.<br />
Open [http://localhost:19002](http://localhost:19002) to view the Metro Bundler in the browser.
See below for Android and iOS implementations.

# Run on Android Emulator

I ran my implementation on my own Android Device via the Expo Client, but if you don't have an android, you can create and run an Android Virtual Device (AVD) in [Android Studio] (https://developer.android.com/studio). 
1) Ensure your phone or AVD is powered on.
2) Install Expo Client in Google Play. Expo Client is the environment where your app will run in developpment. *Note*: Upon installing Expo globally in your development environment, AVDs won't require this step. However, if you're working off of your own device, you will want to confirm that this app is installed.  
3) Run app on device: 
    * AVD: You can either press **`Run on Android device/emulator`** or press `a` from the command line where your Metro Bundler is running.
    * Android device: in Expo Client, scan the QR code that pops up in bundler or navigate to the expo link provided. 

# Run on iOS

If you have a phone or computer that runs on Mac/iOS, click [here] (https://docs.expo.io/workflow/ios-simulator/) on how to configure and run your Expo app through iOS Simulator.
I do not have an Apple device. I tested my app's implementation on iOS to the best of my ability through [Expo Snack] (https://snack.expo.io/).

### `yarn build`

Builds the app for production to the `build` folder.<br />

## Testing Scripts

### `yarn test`

Runs all tests in `__tests__` folder.<br />

### `yarn test --coverage`

View total test coverage and coverage by component, including branch coverage.<br />
