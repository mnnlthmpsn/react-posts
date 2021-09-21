import { useContext, memo } from "react";

import PostWidget from "../components/post";
import MyModal from "../components/modal";
import { ModalContext } from "../contexts/modal";
import AddPost from "../components/addPost";
import { PostContext } from "../contexts/postContext";

const Home = () => {

  const { open_modal } = useContext(ModalContext)
  const { posts } = useContext(PostContext)

  return (
    <>
      <MyModal children={<AddPost />} />

      <div className="container">
        <div className="flex justify-end py-2">
          <button className="btn-primary" onClick={open_modal}>
            <span className="flex justify-center space-x4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Add Post</p>
            </span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {
            posts?.length
              ? posts.map((post, i) => (
                <PostWidget key={i} post={post} index={i} />
              ))
              : <p>No posts added</p>
          }
        </div>
      </div>
    </>
  );
};

export default memo(Home);
