import React, { useReducer, useState } from "react";
import Socialcontext from "../contexts/Socialcontext";
import Socialreducer from "../reducers/Socialreducer";
import Header from "./Header";
import Signin from "./users/signin";
import '../css/SocialAppCss.css';
import { Switch, Route } from "react-router-dom";
import Home from "../Route/Homeroute";
import UserDetail from "../Route/Userdetail";
import LoadingData from "./Loading/Loading";
import Profile from "../Route/Userprofile";

function App() {
    const [state, dispatch] = useReducer(Socialreducer, {
        posts: [],
        users: [],
        userposts: [],
        usernames: [],
        logindata: []
    })
    const [sign, setsign] = useState(false);
    const [Loading, setLoading] = useState(true);

    return (
        <Socialcontext.Provider value={
            {
                logindata: state.logindata,
                userposts: state.userposts,
                usernames: state.usernames,
                users: state.users,
                post: state.posts,
                dispatch
            }
        }>
            {
                sign
                    ?
                    <div>
                        {
                            !Loading
                                ?
                                <>
                                    <Header />
                                    <Switch>
                                        <Route path='/' exact component={Home} />
                                        <Route path='/userdetail/:id' component={UserDetail} />
                                        <Route path='/profile/:id' component={Profile} />
                                        <Route path='/error' component={Home} />
                                        <Route component={Home} />
                                    </Switch>
                                </>
                                : <LoadingData doneload={() => setLoading(false)} />
                        }
                    </div>
                    : <Signin dosignin={() => setsign(true)} />
            }
        </Socialcontext.Provider>
    )
}

export default App;