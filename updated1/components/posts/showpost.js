import React from "react";
import SocialApi from "../../Api/SocialApi";

function ShowPost(props) {
    let deletepost=()=>{
        SocialApi.delete(`/user/${props.item.username}/posts/${props.item.key}.json`)
            .catch(err=>console.log(err))
    }
    return (
        <div className='d-flex border rounded m-3 p-1 justify-content-between align-items-center '>
            <div>
                {
                    props.text
                }
            </div>
            <button className='btn btn-danger' onClick={deletepost}>delete</button>
        </div>
    )
}

export default ShowPost;