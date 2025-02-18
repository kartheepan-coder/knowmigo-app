// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADy-nbv9JqzdHVjlAoZuFYUIWirdx2Y8M",
  authDomain: "knowmigo-699e8.firebaseapp.com",
  projectId: "knowmigo-699e8",
  storageBucket: "knowmigo-699e8.firebasestorage.app",
  messagingSenderId: "361352416226",
  appId: "1:361352416226:web:25280413997670affbc7bb",
  measurementId: "G-BX1RDRF9BP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
export const auth = getAuth(app);
export const bucket = getStorage(app);
