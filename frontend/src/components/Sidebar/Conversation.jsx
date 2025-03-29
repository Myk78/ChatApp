import React from 'react'

function Conversation() {
  return (
    <>
  <div className="flex items-center gap-3 hover:bg-sky-500 rounded p-2 cursor-pointer">
    {/* User Avatar */}
    <div className="avatar avatar-online">
      <div className="w-10 h-10 rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User" />
      </div>
    </div>

    {/* Username & Icon */}
    <div className="flex items-center justify-between flex-1">
      <p className="font-bold text-gray-200">JohnDoe</p>
      <span className="text-lg">🐱‍🏍</span>
    </div>
  </div>

  {/* Divider */}
  <div className="divider h-1"></div>
</>

  )
}

export default Conversation



// template code 

// import React from 'react'

// function Conversation() {
//   return (
//     <>
//   <div className="flex items-center gap-3 hover:bg-sky-500 rounded p-2 cursor-pointer">
//     {/* User Avatar */}
//     <div className="avatar avatar-online">
//       <div className="w-10 h-10 rounded-full">
//         <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User" />
//       </div>
//     </div>

//     {/* Username & Icon */}
//     <div className="flex items-center justify-between flex-1">
//       <p className="font-bold text-gray-200">JohnDoe</p>
//       <span className="text-lg">🐱‍🏍</span>
//     </div>
//   </div>

//   {/* Divider */}
//   <div className="divider h-1"></div>
// </>

//   )
// }

// export default Conversation