import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Signup = () => {
    const [email,setEmail] = useState({value:"",errorr:""})
    const [password,setPassword] = useState({value:"",errorr:""})
    const [confirmPass,setConfirmPass] = useState({value:"",errorr:""})
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth)
    
    
    const handleEmailBlur = event =>{
        const eamailInput = event.target.value;
        setEmail({value:eamailInput,errorr:""})
    }
    const handlePasswordlBlur = event =>{
        const passwordInput = event.target.value;
        setPassword({value:passwordInput,errorr:""})
    }
 
    const handleConfirmPasswordlBlur = event =>{
        const confirmPasswordInput = event.target.value;
        if(confirmPasswordInput !== password.value){
            setConfirmPass({value:"",errorr:"don't match password"})
        }
        else{
            setConfirmPass({value:confirmPasswordInput,errorr:""})
        }
    }
    const formSubmit = event =>{
        event.preventDefault()
        if(password.value.length < 6) setPassword({value:"",errorr:"password must be 6 character"})
        if(password.value === confirmPass.value){
            createUserWithEmailAndPassword(email.value,password.value)
        }
    }
    if(error?.message.includes('already-in-use')){
        toast.error("email already use plz try again",{id:"error"})
    }
   

  return (
    <div className="form">
      <div>
        <h1 className="form-title">Sign up</h1>
        <form onSubmit={formSubmit} action="#">
          <div className="input-group">
            <label htmlFor="email">Email </label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input onBlur={handlePasswordlBlur} type="password" name="password" id="" required/>
            <p style={{color:"red",margin:"0"}}>{password.errorr}</p>
          </div>
          <div className="input-group">
            <label htmlFor="confirmpassword">Confirm password</label>
            <input onBlur={handleConfirmPasswordlBlur} type="password" name="confirmpassword" id="" required/>
            <p style={{color:"red",margin:"0"}}>{confirmPass.errorr}</p>
          </div>
          <div>
            <button className="form-submit">submit</button>
          </div>
        </form>
        <p className="form-text">
          Already have a account{" "}
          <Link className="form-link" to="/login">
            LogIn
          </Link>
        </p>
        <div className="form-other">
          <div className="left"></div>
          <p>or</p>
          <div className="right"></div>
        </div>
        <button className="google-sign-in">sign in with google</button>
      </div>
    </div>
  );
};

export default Signup;
