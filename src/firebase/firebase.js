import { initializeApp } from "firebase/app";
import config from "../config/config";

// Firebase configuration
const firebaseConfig = {
  apiKey: config.firebaseAPIKey,
  authDomain: config.firebaseAuthDomain,
  projectId: config.firebaseProjectId,
  storageBucket: config.firebaseStorageBucket,
  messagingSenderId: config.firebaseMessagingSenderId,
  appId: config.firebaseAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
