import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAVhsmXWUB9gN1s_LV7uNzlhTcgrXAj0xk",
  authDomain: "froodie-e7d6c.firebaseapp.com",
  projectId: "froodie-e7d6c",
  storageBucket: "froodie-e7d6c.appspot.com",
  messagingSenderId: "630985505652",
  appId: "1:630985505652:web:d4e28c06e5cfdec11dca21",
  measurementId: "G-1F6KZRR3X7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };