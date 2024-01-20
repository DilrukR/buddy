import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"; // Corrected import

const firebaseConfig = {
  apiKey: "AIzaSyA8Ib7fnKSPH16fsXrT6g_WDgqZBCBc9PU",
  authDomain: "canteen-buddy.firebaseapp.com",
  projectId: "canteen-buddy",
  storageBucket: "canteen-buddy.appspot.com",
  messagingSenderId: "949865349467",
  appId: "1:949865349467:web:fe5002ad644aedd4aada7e",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);

initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP); // Corrected initialization
