import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth,storage,db} from "../firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate,Link } from "react-router-dom";
const Register = () =>{
    const[err,setErr ]= useState(false)
    const navigate=useNavigate();


    const handleSubmit=async (e)=>{
        e.preventDefault()
        const displayName=e.target[0].value;
        const email=e.target[1].value;
        const password=e.target[2].value;
        const file=e.target[3].files[0];

try{
    
    const res =await createUserWithEmailAndPassword(auth, email, password);
    
    const storageRef = ref(storage, displayName);
    
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
     
      (error) => {
        setErr(true)
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
          await updateProfile(res.user,{
             displayName,
             photoURL: downloadURL,
          });
          await setDoc(doc(db,"users",res.user.uid),
          {
            uid: res.user.uid,
            displayName,
            email,
           photoURL: downloadURL,
          }); 
                
               await setDoc(doc(db,"userChats",res.user.uid),{});
                navigate("/");
               

        });
      }
    );
    
} 
catch(err){
 setErr(true);
}

    }
    return(
        <div className="formContainer">
        <div className="formWrapper">
        <span Style={"display:inline-flex;justify-content:center;margin-right:25px;"}>  <img Style={"height:50px;width:50px; margin-top:2px;"} src="steg3.png"/>
        <span className="logo">StegHide</span></span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="E-mail"/>
                <input type="password"placeholder="Password"/>
                <input type="file" style={{display:"none"}}id="file"/>
                <label for="file">
                   <img Style={"height:35px;width:35px"} src={Add}/>
                   <span>Add an Avatar</span>
                </label>
                <button >Sign up</button>
            {err && <span>Something went wrong</span> }    
            </form>
            <p>You do have an account?<Link to="/login"> Login</Link></p>
        </div>
        </div>
    );

}
export default Register;