import React from "react";

function Allusername(props) {
    // const context = useContext(Socialcontext)
    return (
       <div>
           <div className='d-flex bg-success p-1 align-items-center justify-content-center' >
               <i className=' text-white'>
                      {
                          props.usernames
                      }
               </i>
           </div>
       </div>
    )
}

export default Allusername;