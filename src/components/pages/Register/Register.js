import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../../images/img/logoLight.png";
import LoginWith from '../../shared/LoginWith/LoginWith';
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';

const Register = () => {
      const navigate = useNavigate();

      const [
            createUserWithEmailAndPassword,
            registerdUser,
            registerLoading,
            registerError
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [
            updateProfile,
            updating,
            updateError
      ] = useUpdateProfile(auth);

      // Loading status
      if(registerLoading || updating){
           return <Loading/> 
      }

      if(registerdUser){
            navigate("/");
      }

      const formSubmitHender = async event => {
            event.preventDefault();
            const displayName = event.target.name.value;
            const email = event.target.email.value;
            const password = event.target.password.value;

            await createUserWithEmailAndPassword(email, password)
            await updateProfile({displayName});
      }


      return (
           <section className='d-flex align-items-center justify-content-center login-form'>
                  <div className='login-form-container text-white text-center'>
                        <form action="" className='loginOrRegisterForm' onSubmit={formSubmitHender}>
                              <div className='mt-2'>
                                    <img src={logo} alt="" width="120px" />
                                    <h2 className='my-3'> Please Register</h2>
                              </div>
                              <input type="text" name="name" placeholder='Enter your name....' required autoFocus />
                              <input type="email" name="email" placeholder='Enter your email....' required />
                              <input type="password" name="password" placeholder='Enter your password...' required />
                              <button className='loginOrRegisterFormBtn'>Register</button>
                        </form>

                        <p className='mt-3'>Already have an account? <strong className="switchLoginOrRegister" onClick={()=> navigate('/login')}>Login</strong></p>

                        <div className='d-flex align-items-center justify-content-center my-4'>
                              <div className='login-or'></div>
                              <div className='mx-2'>OR</div>
                              <div className='login-or'></div>
                        </div>

                        <LoginWith></LoginWith>

                        <p className='text-denger'>{registerError && registerError.message}</p>
                        <p className='text-denger'>{updateError && updateError.message}</p>
                  </div>
            </section>
      );
};

export default Register;