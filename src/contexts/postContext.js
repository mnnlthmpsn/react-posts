import { createContext, useReducer, useEffect } from "react";
import PostReducer from "../reducers/postReducer";

export const PostContext = createContext()


const PostContextProvider = ({ children }) => {
    // third parameter is default value
    const [ posts, dispatch ] = useReducer(PostReducer, [], () => {
        const localData = localStorage.getItem('posts')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts])

    return (
        <PostContext.Provider value={{ posts, dispatch }}>
            { children }
        </PostContext.Provider>
    )
}

export default PostContextProvider