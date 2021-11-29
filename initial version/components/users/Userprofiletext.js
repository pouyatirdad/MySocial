import React, {useContext, useEffect} from "react";
import SocialApi from "../../Api/SocialApi";
import Socialcontext from "../../contexts/Socialcontext";

function UserProfileText(props) {
    const context = useContext(Socialcontext)
    const user = context.users.map(i => i.username)

    let likesfromdatabase = Object.entries(props.data).map(([key, value]) => {
        return {
            ...value,
        }
    })
    let like = Object.entries(likesfromdatabase[0]).map(([key, value]) => {
        return {
            ...value,
        }
    })
    let liker = () => {
        // console.log(props.data.username)
        // console.log(props.data.key)
        // console.log(user[0])
        SocialApi.post(`/user/${props.data.username}/posts/${props.data.key}/like/${user[0]}.json`, {liked: user[0]})
            .catch(err => console.log(err))
    }
    return (
        <div className='border border-info rounded mb-2'>
            <div className='d-flex justify-content-between align-items-center m-1'>
                <div>
                    {props.text}
                </div>
                <button className='btn-sm btn-info' onClick={liker}><span className='badge badge-dark badge-pill'>{like.length}</span>Like</button>
            </div>
            <hr className='nav-tabs m-0'/>
            <i className='mb-0 float-right mr-1'>by : {props.id}</i>
        </div>
    )
}

export default UserProfileText;