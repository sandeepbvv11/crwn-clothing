import { async } from '@firebase/util';
import React from 'react';
import {signinwithgooglepopup,createuserdocfromAuth} from '../utils/firebase';

const Signincomponent = ()=> {
    const loggoogleuser = async ()=>{
        const {user}=await signinwithgooglepopup();
        //console.log("response");
        const userref= createuserdocfromAuth(user);
        console.log(user);
    };
    return (
        <div>
            <h1>Sign In</h1>  
            <button onClick={loggoogleuser}>Sign in with Google</button>
        </div>
    );
};

export default Signincomponent;