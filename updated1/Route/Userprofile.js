import React, {useContext} from "react";
import Socialcontext from "../contexts/Socialcontext";
// import {useParams} from "react-router-dom";
import UserProfileText from "../components/users/Userprofiletext";

function Profile() {
    // const param = useParams();
    const context = useContext(Socialcontext)
    const data = context.userposts[0]
    // console.log(data)
    return (
        <div className='container d-flex flex-column'>
            {
                data.map(i =>
                <UserProfileText text={i.text} data={i} id={i.username}/>
            )
            }
        </div>
    )
}

export default Profile;