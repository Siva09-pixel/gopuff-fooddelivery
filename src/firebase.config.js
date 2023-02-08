import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1Cb8n_pABdxAuN6JXxMoQ94g9Dqy1RVc",
  authDomain: "restaurant-react-app-50e19.firebaseapp.com",
  databaseURL: "https://restaurant-react-app-50e19-default-rtdb.firebaseio.com",
  projectId: "restaurant-react-app-50e19",
  storageBucket: "restaurant-react-app-50e19.appspot.com",
  messagingSenderId: "541623743106",
  appId: "1:541623743106:web:c546bb66a37d3e37e83a9b",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
