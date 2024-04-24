import { initializeApp } from "firebase/app";
import {API_KEY , AUTH_DOMAIN , PROJECT_ID, STORAGE_BUCK,SENDER_ID,APP ID } from "@env";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: API_KEY ,
  authDomain: AUTH_DOMAIN ,
  projectId: PROJECT_ID,
  storageBucket:  STORAGE_BUCK ,
  messagingSenderId: SENDER_ID,
  appId: APP ID,
};

export const FIREBASE_APP = initializeApp(firebaseConfig);

initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP); // Corrected initialization
