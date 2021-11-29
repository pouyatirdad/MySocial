function Socialreducer(state, action) {
    switch (action.type) {
        case 'addpost':
            return addpost(state, action);
        case 'adduserposts':
            return adduserposts(state, action);
        case 'adduser':
            return adduser(state, action);
        case'addusernames':
            return addusernames(state, action);
        case'logindata':
            return addlogindata(state, action);
        default :
            return state;
    }
}

export default Socialreducer;

let addpost = (state, action) => {
    let {post} = action.val;
    return {
        ...state,
        posts: [
            ...state.posts,
            post
        ]
    }
}
let adduser = (state, action) => {
    let {userdetail} = action.val;
    return {
        ...state,
        users: [
            ...state.users,
            userdetail
        ]
    }
}
let addusernames = (state, action) => {
    let {usernameentri} = action.val
    return {
        ...state,
        usernames: [
            ...state.usernames,
            usernameentri
        ]
    }
}
let adduserposts = (state, action) => {
    let {posts} = action.val
    return {
        ...state,
        userposts: [
            posts
        ]
    }
}
let addlogindata = (state, action) => {
    let {logindeatils} = action.val
    return {
        ...state,
        logindata: [
            ...state.logindata,
            logindeatils
        ]
    }
}