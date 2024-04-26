import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Context/Context';
import { useContext, useState } from 'react';

const SignUp = () => {
    const mailRef = useRef(null);
    const passRef = useRef(null);
    const nameRef = useRef(null);
    const navigate = useNavigate();
    const ctx = useContext(UserContext);
    const setName = ctx.setName;

    async function onSignInput() {
        const email = mailRef.current.value;
        const password = passRef.current.value;
        const name = nameRef.current.value;

        if (!validateEmail(email)) {
            alert("please enter a valid mail id");
            return 
        }
        const result = await createUserWithEmailAndPassword(auth, email, password, name);
        console.log(result)
        setName(name);
        if (result) {
            navigate("/");
        }
    }
    function validateEmail(email) {
        // Regular expression for email validation
        const re =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

  return (
      <div>
          <input type="email" placeholder='abc@gmail.com' ref={mailRef}/>
          <input type="password" placeholder='*********' ref={passRef}/>
          <input type='name' placeholder='thhhhhh' ref={nameRef} />
          <button onClick={onSignInput} style={{color:"black"}}>Sign Up</button>
    </div>
  )
}

export default SignUp
