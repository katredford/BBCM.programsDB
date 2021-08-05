import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' })
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
             console.log('WE R about to login!!!', formState)
            const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
            const token = mutationResponse.data.login.token;

            console.log('WE loged in!!!! here is response', mutationResponse)
            Auth.login(token);
        } catch (e) {
            console.log(e)
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <div>
            <h2 className="login-header">Login</h2>

            <div className="login-wrapper">
                <form className="login-form" onSubmit={handleFormSubmit}>
                        <label htmlFor="email">Email address:</label>
                        <input
                            placeholder="youremail@test.com"
                            name="email"
                            type="email"
                            className="form-input"
                            id="email"
                            onChange={handleChange}
                        />

                        <label htmlFor="pwd">Password:</label>
                        <input
                            placeholder="******"
                            name="password"
                            type="password"
                            className="form-input"
                            id="pwd"
                            onChange={handleChange}
                        />
                  
                    {
                        error ? <div>
                            <p className="error-text" >The provided credentials are incorrect</p>
                        </div> : null
                    }
                    
                        <button type="submit">
                            Submit!
                        </button>
                    
                </form>
            </div>
        </div>
    );
}


export default Login;
