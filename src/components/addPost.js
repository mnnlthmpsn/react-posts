import { useContext, useState } from "react/cjs/react.development";
import { ModalContext } from "../contexts/modal";
import { PostContext } from "../contexts/postContext";
import { ACTIONS } from "../reducers/postReducer";

const AddPost = () => {

    const { dispatch } = useContext(PostContext)
    const { close_modal } = useContext(ModalContext)

    const [ post, setPost ] = useState({
        title: '',
        description: ''
    })

    const handleSubmit = e => {
        e.preventDefault() 
        dispatch({ type: ACTIONS.ADD_TODO, post })
        setPost({ title: '', description: '' })
        close_modal()
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <input className="form-control" placeholder="Post Title" value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            <textarea className="form-control" placeholder="Post Description" rows="8" value={post.description} onChange={e => setPost({...post, description: e.target.value})}></textarea>
            <div className="flex justify-end">
            <button className="inline-flex btn-primary items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Submit
            </button>
            </div>
        </form>
    )
}

export default AddPost