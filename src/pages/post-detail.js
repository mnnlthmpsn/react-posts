import { memo, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { useContext, useState } from "react/cjs/react.development"
import { randomImg } from "../components/post"
import { ModalContext } from "../contexts/modal"
import { PostContext } from "../contexts/postContext"
import MyModal from "../components/modal";
import UpdatePost from "../components/updatePost"
import { ACTIONS } from "../reducers/postReducer"


const PostDetail = () => {

    const router = useHistory()
    const { id } = useParams()
    const { posts } = useContext(PostContext)
    const { open_modal } = useContext(ModalContext)

    // selected post
    const [post, setPost] = useState({})
    const { dispatch } = useContext(PostContext)

    const open_update_post_modal = () => {
        open_modal()
    }

    const delete_post = () => {
        dispatch({ type: ACTIONS.DELETE_TODO, id })
        router.replace('/')
    }

    useEffect(() => {
        setPost(posts[id])
    }, [id, posts])

    return(
        <div className="container">
            <MyModal>
                <UpdatePost id={id} />
            </MyModal>
            <div className="flex justify-between">
            <button onClick={() => router.replace('/')} className="border border-gray-500 hover:border-green-400 transition-colors duration-800 ease-in-out group rounded p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-green-400 transition-colors duration-800 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
                    </button>
                <div className="inline-flex space-x-2">
                    <button onClick={open_update_post_modal} className="border border-gray-500 hover:border-blue-400 transition-colors duration-800 ease-in-out group rounded p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors duration-800 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    </button>
                    <button onClick={delete_post} className="border border-gray-500 hover:border-red-400 transition-colors duration-800 ease-in-out group rounded p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-red-400 transition-colors duration-800 ease-in-out" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    </button>
                </div>
            </div>

            {/* data here */}
            <div className="py-5">
                <div className="relative w-full h-64 overflow-hidden">
                    <img src={randomImg()} alt="Avatar" className="object-cover object-center w-full h-full rounded" loading='lazy' />
                <div className="absolute w-full py-2.5 bottom-5 flex justify-center inset-x-0 text-white text-xl leading-4 uppercase">
                <p className="border p-5 rounded bg-white text-gray-500">{post.title}</p>
                </div>
            </div>
                {post.description}
            </div>
        </div>
    )
}

export default memo(PostDetail)