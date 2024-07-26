import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import {  NavLink, useNavigate } from 'react-router-dom';
export const Registration = () => {

    const[name, setName] = useState("");
    const[password, setPassword] = useState("");
    const[address, setAddress] = useState("");
    const[phoneNumber, setPhone] = useState("");
    const[email, setEmail] = useState("");

	const apiUrl = import.meta.env.VITE_API

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(`${apiUrl}/api/v1/auth/register`, {
				name,
				password,
				address,  // Assuming typo correction
				phoneNumber,
				email
			});
	
			if (res && res.data.success) {
				toast.success(res.data.message);
				navigate('/login')
			} else {
				toast.error(res.data.message);
			}
		} catch (error) {
			console.log('Error details:', error);
			
			if (error.response) {
				// Server responded with a status other than 200 range
				console.error('Error response data:', error.response.data);
				console.error('Error response status:', error.response.status);
				console.error('Error response headers:', error.response.headers);
			} else if (error.request) {
				// Request was made but no response was received
				console.error('Error request:', error.request);
			} else {
				// Something happened in setting up the request
				console.error('Error message:', error.message);
			}
	
			toast.error("Something went wrong");
		}
	};


  return (
    <>
        <div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-red-800 to-pink-700 i justify-around items-center hidden">
		<div>
			<h1 className="text-white font-bold text-4xl font-sans">Shapperz</h1>
			<p className="text-white mt-1">Be ready for a shapar full of items</p>
			<NavLink to='/about'><button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2" >About</button></NavLink>
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form className="bg-white" onSubmit={handleSubmit}>
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Welcome My G</p>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clipRule="evenodd" />
				</svg>
				<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" required value={name} onChange={(e)=> setName(e.target.value)}/>
      </div>
				
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none border-none" type="email" name="" id="" placeholder="Email Address" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd" />
							</svg>
							<input className="pl-2 outline-none border-none" type="password" name="" id="" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mt-4">
					        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
							        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
					        </svg>
					        <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Phone No" required value={phoneNumber} onChange={(e)=> setPhone(e.target.value)}/>
      </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mt-4">
					        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
							        d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.64.61 1 1 0 011 1v3.5a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.61 3.64 1 1 0 01-.27 1.11l-2.2 2.2z" />
					        </svg>
					        <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="address" required value={address} onChange={(e)=> setAddress(e.target.value)}/>
      </div>
							<button type="submit" className="block w-full bg-red-600 mt-2 py-2 rounded-2xl text-white font-semibold mb-2" >Signup</button>
		</form>
	</div>
</div>
    </>
  )
}

