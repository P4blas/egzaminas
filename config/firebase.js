import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWwvGXrbgCIGOtbJdjywkbHn_M-0vxPo0",
  authDomain: "skelbimu-app.firebaseapp.com",
  projectId: "skelbimu-app",
  storageBucket: "skelbimu-app.appspot.com",
  messagingSenderId: "641053239586",
  appId: "1:641053239586:web:72055464a1e2b2b574dd7b",
  measurementId: "G-LH7YZ26CF0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);