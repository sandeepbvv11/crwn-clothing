// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRmFspkmS8TrJu2AdbQjMm9AONRIJSWlQ",
  authDomain: "crwn-clothing-1d96f.firebaseapp.com",
  projectId: "crwn-clothing-1d96f",
  storageBucket: "crwn-clothing-1d96f.appspot.com",
  messagingSenderId: "935672727453",
  appId: "1:935672727453:web:9c4b9c07da4eddae2bd174"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters(
{
    prompt:"select_account"
}
);
export const auth=getAuth();
export const signinwithgooglepopup=()=>signInWithPopup(auth,provider);
export const db=getFirestore();
export const createuserdocfromAuth = async(userauth)=>{
    const userdocref=doc(db,'users',userauth.uid);
    const userdata=await getDoc(userdocref);
    console.log(userdata);
    console.log(userdata.exists());
    if(!userdata.exists()){
        const {displayName,email}=userauth;
        const createDate=new Date();
        try{
            await setDoc(userdocref,{displayName,email,createDate});
        }catch(error){
            console.log("eror message",error.message);
        }
    }
    return userdocref;
};