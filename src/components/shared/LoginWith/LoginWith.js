import React from 'react';
import "./LoginWith.css";
import googleIcon from "../../../images/icon/google.png";
import facebookIcon from "../../../images/icon/facebook.png";
import githubIcon from "../../../images/icon/github1.png";
import auth from '../../../firebase.init';
import {
      useSignInWithGoogle,
      useSignInWithFacebook,
      useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from 'react-router-dom';

const LoginWith = () => {
      const [
            signInWithGoogle,
            googleUser,
            googleLoading,
            googleError
      ] = useSignInWithGoogle(auth);

      const [
            signInWithFacebook,
            facebookUser,
            facebookLoading,
            facebookError
      ] = useSignInWithFacebook(auth);

      const [
            signInWithGithub,
            githubUser,
            githubLoading,
            githubError,
      ] = useSignInWithGithub(auth);

      const location = useLocation();
      const from = location?.state?.from?.pathname || '/';
      const navigate = useNavigate();

      if(googleUser || facebookUser || githubUser){
            navigate(from)
      }

      return (
            <div>
                  <div className='d-flex align-items-center justify-content-between my-3 loginWithButtons'>
                        <button className='loginWithGoogleBtn' onClick={()=> signInWithGoogle()}>
                              <img src={googleIcon} alt="" />
                              Google
                        </button>
                        <button className='loginWithFacebookBtn' onClick={()=> signInWithFacebook()}>
                              <img src={facebookIcon} alt="" />
                              Facebook
                        </button>
                        <button className='loginWithGithub' onClick={()=> signInWithGithub()}>
                              <img src={githubIcon} alt="" />
                              Github
                        </button>
                  </div>

                  <p>{facebookError && facebookError.message}</p>
                  <p>{googleError && googleError.message}</p>
                  <p>{githubError && githubError.message}</p>
            </div>
      );
};

export default LoginWith;