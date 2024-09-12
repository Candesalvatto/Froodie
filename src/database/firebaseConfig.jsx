import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAtlWO0IjCUgm0OBi8nVMU45spUpoGXWL8",
  authDomain: "froodie-51320.firebaseapp.com",
  projectId: "froodie-51320",
  storageBucket: "froodie-51320.appspot.com",
  messagingSenderId: "545614635426",
  appId: "1:545614635426:web:3e7ce00bc5e1e3c7cb12fb",
  measurementId: "G-WG9WB5XTJB"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };




