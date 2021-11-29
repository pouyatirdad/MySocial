import React, {useContext, useState} from "react";
import Socialcontext from "../../contexts/Socialcontext";

function UserLogin(props) {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    // const [data, setdata] = useState('')
    const context = useContext(Socialcontext)
    const logindata = context.logindata[0].find(i => i.username === username)
    let usnm = (e) => {
        setusername(e.target.value)
    }
    let pswd = (e) => {
        setpassword(e.target.value)
    }
    // logindata.length===0 ? '' :console.log(logindata.firstname)
        let handler = () => {
            if ((logindata) && (logindata.username === username && logindata.pass === password)) {
                context.dispatch({type: 'adduser', val: {userdetail: logindata}})
                setTimeout(() => {
                    props.doner()
                }, 200)
            }else {
                window.alert('Fill inputs Carefully')
            }
        }

    return (
        <div className='container'>
            <div className='nav-tabs'>Login</div>
            <div className='d-flex flex-column align-items-center justify-content-center mt-3'>
                <input value={username} onChange={usnm} placeholder='username'/>
                <input value={password} onChange={pswd} placeholder='password'/>
                {
                    logindata ?
                        <>
                            {
                                logindata.username === username && logindata.pass === password
                                    ? <h4>Ok</h4>
                                    :
                                    <span className='m-1 spinner-border'/>
                            }
                        </>
                        : <h4>user isnt exist</h4>
                }
                <button className='btn-success' onClick={handler}>Login</button>
            </div>
        </div>
    )
}

export default UserLogin;