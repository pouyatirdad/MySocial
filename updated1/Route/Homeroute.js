import React, {useContext, useEffect} from "react";
import Form from "../components/posts/formforaddpost";
import PostList from "../components/posts/PostList";
import UsersList from "../components/users/UsersLsit";
import SocialApi from "../Api/SocialApi";
import Socialcontext from "../contexts/Socialcontext";
function Home() {
    const context=useContext(Socialcontext)
    const username=context.users.map(i=>i.username)
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
        SocialApi.get(`/user/${username}/posts.json`)
            .then(response => {!response.data ? getuserposts('nothing') :getuserposts(response.data)})
            .catch(err => console.log(err))
    }, )
    return(
        <div >
            <div className='data d-flex flex-column '>
                <Form/>
                <PostList/>
            </div>
            <div className='usernames d-flex flex-column'>
                <UsersList/>
            </div>
        </div>
    )
}
export default Home;