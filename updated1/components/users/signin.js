import React, {useContext, useEffect, useState} from "react";
import Socialcontext from "../../contexts/Socialcontext";
import SocialApi from "../../Api/SocialApi";
import UserLogin from "./Login";
import LoadingforLogin from "../Loading/LoadingforLogin";

function Signin(props) {
    const [loading, setloading] = useState(true)
    const [login, setlogin] = useState(false)
    const [firstname, setfname] = useState('');
    const [lastname, setlname] = useState('');
    const [username, setuname] = useState('');
    const [pass, setpass] = useState('');
    const [repass, setrepass] = useState('');
    const context = useContext(Socialcontext);
    //****************************************************************************
    let getusername = (data) => {
        let usernameentri = Object.entries(data).map(([key, value]) => {
            return {
                ...value,
                key
            }
        })
        context.dispatch({type: 'addusernames', val: {usernameentri}})
    }
    useEffect(() => {
        SocialApi.get(`/users/${username}.json`)
            .then(response => getusername(response.data))
            .catch(err => console.log(err))
    },[])
    //****************************************************************************
    // const post=context.post.map(i=>i.text)
    let chngfn = (e) => {
        setfname(e.target.value)
    }
    let chngln = (e) => {
        setlname(e.target.value)
    }
    let chngun = (e) => {
        setuname(e.target.value)
    }
    let chngpas = (e) => {
        setpass(e.target.value)
    }
    let chngrepas = (e) => {
        setrepass(e.target.value)
    }
    //****************************************************************************
    let sbm = (e) => {
        e.preventDefault();
        // context.dispatch({type:'adduser',val:{firstname,lastname,username,pass}})
        let userdetail = {firstname, lastname, username, pass}
        // pass !== repass ? window.alert('password isnt match') :
        if (firstname.length <= 3 || lastname.length <= 3 || username.length <= 3 || pass !== repass) {
            window.alert('fill inputs')
        } else {
            //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                context.dispatch({type: 'adduser', val: {userdetail: {'username' : username}}})
            //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            SocialApi.post(`/login.json`, userdetail)
                .catch(err => console.log(err))
                .catch(err => console.log(err))
            SocialApi.put(`/users/${username}.json`, {username})
                .catch(err => console.log(err))
            setfname('');
            setlname('');
            setuname('');
            setpass('');
            setrepass('');
            props.dosignin();
        }
    }
    return (
        <>
            {
                !login
                    ? <div className='d-flex flex-column'>
                        <div className='d-flex mb-1 p-1 nav-tabs float-left '>
                            <div>
                                <button onClick={() => setlogin(true)}
                                        className='nav-link text-light btn-lg btn-info'>Login
                                </button>
                            </div>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className=''>
                                <h4>The Minimum input is 3 Character</h4>
                                <hr className='nav-tabs mb-0 bg-danger'/>
                            </div>
                            <form className='d-flex align-items-center flex-column' onSubmit={sbm}>
                                <p className='mb-0'>first name : </p>
                                <input onChange={chngfn} value={firstname}/>
                                <p className='mb-0'>last name : </p>
                                <input onChange={chngln} value={lastname}/>
                                <p className='mb-0'>username : </p>
                                <input onChange={chngun} value={username}/>
                                <p className='mb-0'>password : </p>
                                <input onChange={chngpas} type={'password'} value={pass}/>
                                <p className='mb-0'>retype password : </p>
                                <input onChange={chngrepas} type={'password'} value={repass}/>
                                <p className='mb-0'>--------------------</p>
                                {
                                    repass.length === 0 ? '' : <div>
                                        {
                                            pass === repass ? <p className='text-success'>password match</p> :
                                                <p className='text-danger'>passwords isnt match</p>
                                        }
                                    </div>
                                }
                                <button className='btn-lg btn-secondary'>register</button>
                            </form>
                            <div className='mt-5  '>
                                <button onClick={() => props.dosignin()}
                                        className='btn-lg btn-danger border rounded-pill text-warning '>I Dont Want Register
                                </button>
                            </div>
                        </div>
                    </div>
                    : <>{
                        loading
                            ? <LoadingforLogin doner={() => setloading(false)}/>
                            : <UserLogin doner={props.dosignin}/>
                    }</>
            }
        </>
    )
}

export default Signin;