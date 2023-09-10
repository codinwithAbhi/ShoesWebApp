import React, { Component } from 'react'
import Images from '../Constand'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
        }
    }
    inputChangeHandler = (event) => {
        const { name, type, value } = event.target;
        this.setState({
            [name]: type === "password" ? value : value
        })
        // console.log(name)
        // console.log(type)
        // console.log(value)
    }
    submitData = (event) => {
        event.preventDefault();
        if (this.state.email === "") {
            alert('Email is Require');
            return false;
        }
        if (!this.state.email.match("[a-zA-Z ]{1,20}")) {
            alert("Email must contain only character or Number Min-1 amd max-20");
            return false
        }
        if (this.state.password === "") {
            alert("Please enter your password")
            return false;
        }

        alert(JSON.stringify(this.state));
    }


    render() {
        const { email, password } = this.state;
        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='hidden sm:block'>  
                    <img className='w-full h-full object-cover' src={Images.bg2} />
                </div>
                <div className='bg-gray-800 flex flex-col justify-center'>
                    <form onSubmit={this.submitData} className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                        <h2 className='text-4xl dark:text-white font-bold text-center'>LOGIN</h2>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='email' name='email' value={email} onChange={this.inputChangeHandler} placeholder='Enter your Email'></input>
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='password' name='password' value={password} onChange={this.inputChangeHandler} placeholder='Password'></input>
                        </div>
                        <button type='submit' className='bg-cyan-400 text-white font-[Pippins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded'>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
