import React from 'react'
import { Link,useNavigate} from 'react-router-dom'

export default function Forgotpassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validations or API calls here
    navigate('/otpverify'); // Navigate to the OTP verification page
  };
  return (
    <div className='w-full h-screen flex items-center justify-center tracking-wider'>
      <div className='w-11/12 sm:w-5/12 md:w-3/12 text-sm glass'>
      <div className='w-full text-center my-3'>
            <h2 className='text-2xl text-black font-medium'>Safe Crypto Stocks</h2>
            <h2 className='text-2xl text-black '>Forgot Password</h2>
            <div>
                <form className="my-2" onSubmit={handleSubmit}>
        
                  <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                    <input type="email" className="w-11/12 bg-transparent outline-none placeholder-black" placeholder='Email Id'/>
                    <div className="w-2/12 flex items-center justify-center">
                      <i class="fa-solid fa-envelope text-xl"></i>
                    </div>   
                  </div>  
                
                  <div className="mx-5 my-7 py-2">
                        <button className="bg-black w-full h-[35px] rounded-sm text-white">
                          Submit

                        </button>
                  </div>
                </form>
            </div>
      </div>
    </div>
    </div>
   
  )
}
