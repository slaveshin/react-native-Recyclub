import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDi6-r20MBwCPgSCYligBLfGmzRrx2axFY",
  authDomain: "react-native-recyclub.firebaseapp.com",
  databaseURL: "https://react-native-recyclub-default-rtdb.firebaseio.com",
  projectId: "react-native-recyclub",
  storageBucket: "react-native-recyclub.appspot.com",
  messagingSenderId: "58682053618",
  appId: "1:58682053618:web:8e97241e18b45b02a3516b",
  measurementId: "G-52VRNMTZ6M",
};

const app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase(app));
export const getDB = () => get(dbRef).then((data) => data.val());
