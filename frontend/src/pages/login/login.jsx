import React from 'react'

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
        backdrop-blur-lg bg-opacity-50 p-6">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500'>ChatApp</span>
            </h1>
            <form action="" className='w-full'>
                <div className='w-full'>
                    <label className='label p-2 text-left w-full'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
                </div>
                <div className='w-full'>
                    <label className='label p-2 text-left w-full'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="text" placeholder='Enter password' className='w-full input input-bordered h-10' />
                </div>
                <a href="#" className='w-full text-left text-sm hover:underline hover:text-blue-600 
                mt-2 inline-block'>{"Don't"} have an account </a>
                <div className="">
                    <button className='btn btn-block btn-sm mt-2'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login


// template code of login page in tailwind daisyui page

// function Login() {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//           <div className="w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
//           backdrop-blur-lg bg-opacity-50 p-6">
//               <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                   Login
//                   <span className='text-blue-500'>ChatApp</span>
//               </h1>
//               <form action="" className='w-full'>
//                   <div className='w-full'>
//                       <label className='label p-2 text-left w-full'>
//                           <span className='text-base label-text'>Username</span>
//                       </label>
//                       <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
//                   </div>
//                   <div className='w-full'>
//                       <label className='label p-2 text-left w-full'>
//                           <span className='text-base label-text'>Password</span>
//                       </label>
//                       <input type="text" placeholder='Enter password' className='w-full input input-bordered h-10' />
//                   </div>
//                   <a href="#" className='w-full text-left text-sm hover:underline hover:text-blue-600 
//                   mt-2 inline-block'>{"Don't"} have an account </a>
//                   <div className="">
//                       <button className='btn btn-block btn-sm mt-2'>Login</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }
  
//   export default Login