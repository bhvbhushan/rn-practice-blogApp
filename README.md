## Blog App (React-Natieve) - Android/iOS App

This is an practice app with react-native for android/iOS which uses a mock-DB created and used using `jsonserver` & `ngrok` to fetch the data

**To run Locally :**
It uses expo-app ( available on android play store and apple store for viewing realtime development changes)
Learn more about expo: https://expo.io/

To run locally:

- **Start jsonserver**: To start up mock-DB, cd to `jsonserver` dir

  - run : `npm run db` : It will start your mock db
  - run : `npm run tunnel` : It will start an ngrok server to which can be accessed from anywhere, you needn't be on the same internet connection or same device

- **Start BlogApp**: This is the actual app, cd to `blog` dir
  - run: `npm run start`
