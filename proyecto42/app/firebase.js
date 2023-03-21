
 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js" 

import {getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js" //para CRUD
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmgLiWU5z7MYr1zokldVVB2CKABdP9XrM",
  authDomain: "proyecto-unidad-4-6bf89.firebaseapp.com",
  projectId: "proyecto-unidad-4-6bf89",
  storageBucket: "proyecto-unidad-4-6bf89.appspot.com",
  messagingSenderId: "81168775436",
  appId: "1:81168775436:web:84ccf84510208e7d233129"
};
 // Initialize Firebase
export const app = initializeApp(firebaseConfig); //recordar export es para poder importar app en otros archivos
//console.log(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();

//CRUD
export const db = getFirestore();
export const saveTask = (title, description, userMail) =>{
  addDoc(collection(db, "tasks"), { title, description, userMail})
}
export const getTasks = () => getDocs(collection(db, 'tasks')) //sirvio para recolectar todos los datos

export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback);

//export const deleteTask = (id) => console.log(id);
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);








const provider = new GoogleAuthProvider();

const gool = document.querySelector("#google");

gool.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("hola");
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
});
