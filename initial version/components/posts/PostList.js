import React, {useContext} from "react";
import Socialcontext from "../../contexts/Socialcontext";
import ShowPost from "./showpost";

function PostList() {
    const context = useContext(Socialcontext)
    const postfilter = context.userposts[0]
    const usernamebyposts = context.userposts[0].find(i => i.username)
    const usernamebyusers = context.users.map(i => i.username)
    // console.log(postfilter)
    // console.log(usernamebyposts)
    // console.log(usernamebyusers[0])
    return (
        <>
            { usernamebyposts
                ?
                <div>
                    {usernamebyposts.username === usernamebyusers[0]
                        ?
                        <div className=''>
                            {
                                postfilter.map(i =>
                                    <ShowPost
                                        text={i.text}
                                        item={i}
                                    />
                                )
                            }
                        </div>
                        : <h3 className='d-flex justify-content-center'>Nothing</h3>
                    }
                </div>
                : ''
            }
        </>
    )
}

export default PostList;