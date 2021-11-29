import React, {useContext, useEffect} from "react";
import SocialApi from "../../Api/SocialApi";
import Socialcontext from "../../contexts/Socialcontext";
function LoadingforLogin(props) {
    const context=useContext(Socialcontext)
    // ****************************************************************************
    let getlogindata = (data) => {
        let logindata = Object.entries(data).map(([key, value]) => {
            return {
                ...value,
                key
            }
        })
        context.dispatch({type: 'logindata', val: {logindeatils:logindata}})
    }
    useEffect(() => {
        SocialApi.get(`/login.json`)
            .then(response => getlogindata(response.data))
            .catch(err => console.log(err))
    }, )
    setTimeout(()=>{
        props.doner()
    },2000)
    return(
        <div className='d-flex justify-content-center align-items-center' >
            <span className='spinner spinner-grow text-dark'/>
            <span className='spinner spinner-grow text-danger'/>
            <h1>Loading</h1>
            <span className='spinner spinner-grow text-success'/>
            <span className='spinner spinner-grow text-dark'/>
        </div>
    )
}
export default LoadingforLogin;