import axios from 'axios'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState(false);
    const [pwd, setPwd] = useState(false);

    const sendData = () =>{
        axios.post('https://reqres.in/api/login', 
        {
            email: email,
            password: pwd
        })
        .then(response => {
            console.log(response)
            localStorage.setItem('auth', JSON.stringify(response.data.token))
            window.location.reload();
        }).catch(err => {
            console.log(err)
        })
    }

    return ( 
        <div className="h-screen flex">
            <div className="flex w-screen items-center justify-center">
                <div className="h-[400px] w-[400px] bg-violet-400 rounded-lg shadow-2xl">
                    <div>
                        <h1 className="flex justify-center mt-5 font-bold text-2xl text-white">Welcome Back!</h1>
                        <div className="mx-10 mt-12 text-white">
                            <h3 className="font-bold">Username<span className="text-red-500 pl-1">*</span></h3>
                            <input type="text" placeholder="Silahkan masukkan username..." className="mb-5 mt-2 p-2 rounded-md w-full text-black" onChange={(e) => {
                                setEmail(e.target.value)
                            }}/>
                            <h3 className="font-bold">Password<span className="text-red-500 pl-1">*</span></h3>
                            <input type="password" placeholder="Silahkan masukkan password..." className="w-full rounded-md mt-2 p-2 text-black" onChange={(e) => {
                                setPwd(e.target.value)
                            }}/>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;