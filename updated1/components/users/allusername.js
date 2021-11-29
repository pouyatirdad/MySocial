import React from "react";

function Allusername(props) {
    // const context = useContext(Socialcontext)
    let loging = (e) => {
        console.log(e.target.textContent);
        //currentTarget.textContent
    }
    return (
        <div>
            <div className='d-flex bg-success p-1 align-items-center justify-content-center' >
                <i className=' text-white'>

                    <div onClick={loging}>{props.usernames}</div>
                </i>
            </div>
        </div>
    )
}

export default Allusername;