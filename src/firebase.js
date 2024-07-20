import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDlqGKeNQk13AJxDff6W2p7KRlyDI5RkU4",
    authDomain: "yieldy-63a91.firebaseapp.com",
    projectId: "yieldy-63a91",
    storageBucket: "yieldy-63a91.appspot.com",
    messagingSenderId: "130981602377",
    appId: "1:130981602377:web:e32c73ff70b8b5b8104b98"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);