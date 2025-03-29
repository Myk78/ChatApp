import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessage} from 'react-icons/ti'


function MessageContainer() {
const nochatSelected = true
  return (
    <div className="md:min-w-[450px] flex flex-col">
    {nochatSelected ? <NochatSelected/>:(<>
    <div className="bg-slate-500 px-4 py-2 mb-2">
      <span className='label-text'>To</span>
      <span className='text-gray-500 font-blod'>Myk</span>

    </div>
    <Messages/>
    <MessageInput />
    </>)}
    </div>
  )
}

export default MessageContainer

const NochatSelected = () =>{
  return(
    <div className="flex items-center justify-center  w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col">
        <p>Welcome 👋🏻 Myk</p>
        <p>Select a chat to start messaging  </p>
        <TiMessage className='text-3xl md:text-6xl text-center'/>

      </div>
    </div>
  )
}

// code template for message container ui

// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'

// function MessageContainer() {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//     <>
//     <div className="bg-slate-500 px-4 py-2 mb-2">
//       <span className='label-text'>To</span> <span className='text-gray-500 font-blod'>Myk</span>
//     </div>
//     <Messages/>
//     <MessageInput />
//     </>
//     </div>
//   )
// }

// export default MessageContainer