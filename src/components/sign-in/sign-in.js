import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';


import './sign-in.scss'

export default class SignIn extends Component {
    state= {
        email: "",
        password:""
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:"", password:""})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        label="email"
                        required />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit"> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}