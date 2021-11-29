import { createContext } from "react";
const Socialcontext = createContext({
    post: [],
    users: [],
    usernames: [],
    userposts: [],
    logindata: [],
    add: () => { },
    delete: () => { },
    edit: () => { },
})
export default Socialcontext;       