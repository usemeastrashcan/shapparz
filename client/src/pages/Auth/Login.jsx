import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth'

const Login = () => {

  const apiUrl = import.meta.env.VITE_API
  
    const [password, setPassword] = useState("")
    const [email, setMail] = useState("")
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async(e)=>
    {
        try {
            e.preventDefault()
            const res = await axios.post(`${apiUrl}/api/v1/auth/login`,
                {
                    email,
                    password
                }
            )

            if (res && res.data.success) {
                toast.success(res.data.message);
                setAuth(
                   { ...auth,
                    user: res.data.user,
                    token: res.data.token}
                )
                localStorage.setItem("auth", JSON.stringify(res.data))
                navigate( '/')
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error("Something Went Wrong")
        }
    }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" >
  <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div className="text-white">
      <div className="mb-8 flex flex-col items-center">
        { <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" width="150" alt=""  /> }
        <h1 className="mb-2 text-2xl">Shaparzz</h1>
        <span className="text-gray-300">Enter Login Details</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com" value={email} onChange={(e)=> {setMail(e.target.value)}}/>
        </div>

        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
        </div>
        <div className="mt-8 flex justify-center text-lg text-black">
          <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login