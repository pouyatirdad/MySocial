import React, {useContext, useState} from "react";
import Socialcontext from "../../contexts/Socialcontext";
import SocialApi from "../../Api/SocialApi";

function Form() {
    const context = useContext(Socialcontext)
    const username=context.users.map(i=>i.username)
    const [text, settext] = useState('')
    let sbm = (e) => {
        // context.dispatch({type: 'addpost', val: {text,username:username[0]}})
        e.preventDefault()
        let post={text,username:username[0],like:''}
        SocialApi.post(`/user/${username}/posts.json`,post)
            .then(response=>context.dispatch({type: 'addpost', val:{post:{...post,key:response.data.name}}}))
            .catch(err=>console.log(err))
        settext('')
    }
    let chng = (e) => {
        settext(e.target.value)
    }
    return (
        <form className='d-flex mt-1 flex-column container' onSubmit={sbm}>
                <textarea rows={'4'} cols={'40'} value={text} placeholder={'write your post'} onChange={chng}/>
                <button className='btn-warning bg-info btn-lg text-light'>Add</button>
        </form>
    )
}

export default Form;