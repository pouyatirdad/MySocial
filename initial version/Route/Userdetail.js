import React, {useContext, useEffect} from "react";
import Socialcontext from "../contexts/Socialcontext";
import {Link, useParams} from 'react-router-dom';
import SocialApi from "../Api/SocialApi";

function UserDetail() {
    const params = useParams()
    // const history=useHistory()
    const context = useContext(Socialcontext)
    // const entriesusername = context.usernames[0].find(i => i.username === params.id)
    if (context.logindata[0]){
       var user= context.logindata[0].find(i => i.username === params.id)
    }
    // console.log(context.logindata.find(i=>i.username===params.id))
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
            SocialApi.get(`/user/${params.id}/posts.json`)
                .then(response => {!response.data ? getuserposts('nothing') :getuserposts(response.data)})
                .catch(err => console.log(err))
    }, )
    //**********************************************************************
    return (
        <>
            { user
                ?
                <div className='container'>
                    <h2>User Image</h2>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">First name : <h4>{user.firstname}</h4></h6>
                            <h6 className="card-title">Last name : <h4>{user.lastname}</h4></h6>
                            <p className="card-text">User id : {params.id}</p>
                        </div>
                        <Link className='btn-lg btn-info text-warning d-flex justify-content-center align-items-center'
                              to={`/profile/${params.id}`}>See {params.id} Profile</Link>
                    </div>
                </div>
                :<div className='d-flex flex-column justify-content-center align-items-center'>
                    <h3 className='text-warning'>Warning</h3>
                    <h4>your data dont send to server</h4>
                    <div className='d-flex align-items-center justify-content-center'>
                        <p className='font-weight-bold text-danger'>Hint : </p>
                        <p>please exit and reLogin</p>
                    </div>
                </div>
            }
            </>
    )
}

export default UserDetail;