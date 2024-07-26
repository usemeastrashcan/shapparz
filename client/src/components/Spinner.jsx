import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Spinner = () => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>
        {
            const interval = setInterval(()=>
            {
                setCount(prev => --prev)
            }, 1000)

            if(count === 0)
            {
                navigate('/login', {
                    state: location.pathname
                })
                return ()=> clearInterval(interval)
            }
        },[count, navigate, location])

  return (
    <>
       <div className="align-items-center d-flex flex-column justify-content-center"
        style={{height: '100vh'}} >
            <h1>Redirecting In {count} </h1>
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div> 
    </>
)
}

export default Spinner