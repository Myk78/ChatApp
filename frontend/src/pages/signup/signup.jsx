import React from 'react'
import GenderCheckBox from './genderCheckBox'

function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp <span className='text-blue-500'>ChatApp</span></h1>

        <form >
          <div>
            <label className='label p-2 w-full text-left'>
              <span className='text-base label-text'>Fullname</span>
            </label>
            <input type="text" placeholder='Enter Fullname' className='w-full input input-bordered h-10' />
          </div>
          <div className='w-full'>
                    <label className='label p-2 text-left w-full'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2 w-full text-left'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2 w-full text-left'>
              <span className='text-base label-text'>ConfirmedPassword</span>
            </label>
            <input type="text" placeholder='Enter ConfirmedPassword' className='w-full input input-bordered h-10' />
          </div>

          {/* {Gender checkbox goes here} */}
          <GenderCheckBox />

          <a href="#" className='w-full text-left text-sm hover:underline hover:text-blue-600 
                mt-2 inline-block'>{"Already"} have an account </a>
                <div className="">
                    <button className='btn btn-block btn-sm mt-2 border-slate-700'>Sign Up</button>
                </div>


                
        </form>
      </div>

    </div>
  )
}

export default SignUp


// code template for signup page and tailwind and daisyui framework


// function SignUp() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp <span className='text-blue-500'>ChatApp</span></h1>

//         <form >
//           <div>
//             <label className='label p-2 w-full text-left'>
//               <span className='text-base label-text'>Fullname</span>
//             </label>
//             <input type="text" placeholder='Enter Fullname' className='w-full input input-bordered h-10' />
//           </div>
//           <div className='w-full'>
//                     <label className='label p-2 text-left w-full'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
//           </div>
//           <div>
//             <label className='label p-2 w-full text-left'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//           </div>
//           <div>
//             <label className='label p-2 w-full text-left'>
//               <span className='text-base label-text'>ConfirmedPassword</span>
//             </label>
//             <input type="text" placeholder='Enter ConfirmedPassword' className='w-full input input-bordered h-10' />
//           </div>

//           {/* {Gender checkbox goes here} */}
//           <GenderCheckBox />

//           <a href="#" className='w-full text-left text-sm hover:underline hover:text-blue-600 
//                 mt-2 inline-block'>{"Already"} have an account </a>
//                 <div className="">
//                     <button className='btn btn-block btn-sm mt-2 border-slate-700'>Sign Up</button>
//                 </div>


                
//         </form>
//       </div>

//     </div>
//   )
// }

// export default SignUp