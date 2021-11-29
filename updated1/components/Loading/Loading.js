import React, {useContext, useEffect} from "react";
import SocialApi from "../../Api/SocialApi";
import Socialcontext from "../../contexts/Socialcontext";

function LoadingData(props) {
    const context = useContext(Socialcontext);
    const usernamebyusers = context.users.map(i => i.username)
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
    setTimeout(()=>{
        SocialApi.get(`/login.json`)
            .then(response => getlogindata(response.data))
            .catch(err => console.log(err))
    },1200)
    //*********************************************************
    let getuserposts = (data) => {
        let posts = Object.entries(data).map(([key, value]) => {
            return {
                ...value,
                key
            }
        })
        // console.log(posts)
        context.dispatch({type: 'adduserposts', val: {posts}})
    }
    useEffect(() => {
        SocialApi.get(`/user/${usernamebyusers[0]}/posts.json`)
            .then(response => {!response.data ? getuserposts('nothing') :getuserposts(response.data)})
            .catch(err => console.log(err))
    }, )

    setTimeout(() => {
        props.doneload();
    }, 2000)
    return (
        <div className='d-flex justify-content-center align-items-center' >
            <span className='spinner spinner-grow text-danger'/>
            <h1>Loading</h1>
            <span className='spinner spinner-grow text-success'/>
        </div>
    )
}

export default LoadingData;