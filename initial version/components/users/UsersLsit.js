import React, {useContext, useState} from "react";
import Socialcontext from "../../contexts/Socialcontext";
import Allusername from "./allusername";
import {Link} from "react-router-dom";

function UsersList() {
    const context = useContext(Socialcontext)
    const usernamesbysite = context.usernames
    const [search, setsearch] = useState('')
    const [find, setfind] = useState([
        {username: ''}
    ])
    let searchname;
    let chng = (e) => {
        setsearch(e.target.value)
    }
    let finder = () => {
        searchname = usernamesbysite[0].find(i => i.username === search)
        // console.log(searchname.username)
        setfind(searchname)
    }
    return (
        <div className='bg-success container'>
            <div className='d-flex align-items-center justify-content-center'>
                <input style={{width: '70%'}} className='bg-light border-0 text-info'
                       placeholder={'search user id'} onChange={chng}/>
                <button className='btn-sm btn-success border-0 text-warning' onClick={finder}>Find</button>
            </div>
            {
                find ?
                    <Link to={`/userdetail/${find.username}`} className='text-warning mt-1 d-flex align-items-center justify-content-center'>{find.username}</Link>
                    :
                    <div className='spinner spinner-grow text-primary mt-1'/>
            }
            <hr className='text-white nav-tabs'/>
            <h4 className='text-white d-flex justify-content-center'>Users</h4>
            <hr className='text-white nav-tabs mb-0'/>
            {
                usernamesbysite[0].map(i =>
                    <Allusername
                        usernames={i.username}
                    />
                )
            }
        </div>
    )
}

export default UsersList;