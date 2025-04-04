import React from 'react'

function GenderCheckBox() {
    return (
      <div className='flex py-3'>
          <div className="form-control">
              <label className={`label gap-2 cursor-pointer`}>
                  <span className='label-text'>Male</span>
                  <input type="checkbox" className='checkbox border-slate-900' />
              </label>
          </div>
          <div className="form-control">
              <label className={`label gap-2 cursor-pointer`}>
                  <span className='label-text'>Female</span>
                  <input type="checkbox" className='checkbox border-slate-900' />
              </label>
          </div>
      </div>
    )
}

  
  export default GenderCheckBox


// code template of checkbox

// function GenderCheckBox() {
//   return (
//     <div className='flex py-3'>
//         <div className="form-control">
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Male</span>
//                 <input type="checkbox" className='checkbox border-slate-900' />
//             </label>
//         </div>
//         <div className="form-control">
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Female</span>
//                 <input type="checkbox" className='checkbox border-slate-900' />
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckBox