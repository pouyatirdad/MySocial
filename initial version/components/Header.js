import React, {useContext} from "react";
import Socialcontext from "../contexts/Socialcontext";
import {NavLink,Link} from "react-router-dom";

function Header() {
    const context=useContext(Socialcontext);
    let name=context.users.map(i=>i.username)
    return (
        <div className="container-fluid d-flex align-items-center justify-content-between nav-tabs">
            <div>
                <NavLink className='text-dark' to='/' exact><h1>Social App</h1></NavLink>
            </div>
            <div>
                {
                    context.users ? <Link className='btn-sm btn-info  nav-link text-light' to={`/userdetail/${name}`}>{name}</Link> : <button className='nav-link'>'Login'</button>
                }
            </div>
        </div>
    )
}
export default Header;