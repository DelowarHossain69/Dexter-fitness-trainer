import React, { useRef, useState } from 'react';
import "./Login.css";
import logo from "../../../images/img/logoLight.png";
import LoginWith from '../../shared/LoginWith/LoginWith';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
      useSignInWithEmailAndPassword,
      useSendPasswordResetEmail,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';

const Login = () => {
      const [
            signInWithEmailAndPassword,
            signInUser,
            signInLoading,
            signInError
      ] = useSignInWithEmailAndPassword(auth);
      const [
            sendPasswordResetEmail,
            sending,
            resetPasswordEmailError
      ] = useSendPasswordResetEmail(auth);
      const [forgetPassword, setForgetPassword] = useState(false);
      const navigate = useNavigate();
      const location = useLocation();
      const from = location?.state?.from?.pathname || '/';
      const emailRef = useRef();

      if (signInUser) {
            navigate(from, { replace: true });
      }

      if (signInLoading || sending) {
            return <Loading />
      }

      const formSubmitHendeler = event => {
            event.preventDefault();
            const email = event.target.email.value;
            const password = event.target.password.value;
            console.log(email, password)
            console.log("clicked")
            signInWithEmailAndPassword(email, password);
      }

      const forgetPasswordHendeler = async() => {
            const email = emailRef.current.value;
            await sendPasswordResetEmail(email);

            setForgetPassword(false);

            toast.success('Check your email', {
                  position: "top-right",
                  autoClose: 10000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'dark'
            });
      }

      return (
            <section className='d-flex align-items-center justify-content-center login-form'>

                  <ToastContainer/>

                  <div className='login-form-container text-white text-center'>
                        <form action="" className='loginOrRegisterForm' onSubmit={formSubmitHendeler}>
                              <div className='mt-2'>
                                    <img src={logo} alt="" width="120px" />
                                    <h2 className='my-3'> Please Login</h2>
                              </div>

                              <input type="email" ref={emailRef} name="email" placeholder='Enter your email....' required autoFocus />
                              
                              {
                                    forgetPassword || <input type="password" name="password" placeholder='Enter your password...' required />
                              }

                              {
                                    forgetPassword || <button className='loginOrRegisterFormBtn'>Login</button>
                              }
                        </form>

                        {
                              forgetPassword && 
                              <button 
                              className='loginOrRegisterFormBtn'
                              onClick={forgetPasswordHendeler}
                              >
                              Send email
                              </button>
                        }

                        <p className='mt-5  mb-2'>Forget <strong className="switchLoginOrRegister" onClick={() => setForgetPassword(!forgetPassword)}>password?</strong></p>

                        <p>Don't have an account? <strong className="switchLoginOrRegister" onClick={() => navigate("/register")}>Register</strong></p>

                        <div className='d-flex align-items-center justify-content-center my-4'>
                              <div className='login-or'></div>
                              <div className='mx-2'>OR</div>
                              <div className='login-or'></div>
                        </div>

                        <LoginWith></LoginWith>

                        <p className='text-denger'>{signInError && signInError.message}</p>
                        <p className='text-denger'>{resetPasswordEmailError && resetPasswordEmailError.message}</p>
                  </div>
            </section>
      );
};

export default Login;