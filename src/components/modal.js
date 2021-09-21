import { memo } from "react";
import { useContext } from "react/cjs/react.development";
import { ModalContext } from "../contexts/modal";

const MyModal = ({ children }) => {
  const { isOpen, close_modal } = useContext(ModalContext);

  return (
    <>
      <div
        className={`fixed flex justify-center inset-0 w-screen p-5 h-screen z-10 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } `}
      >
        <div
          className={`w-full p-5 mt-1 md:mt-5 rounded-lg  h-4/5 space-y-6 bg-white md:w-1/2 z-60 ${
            isOpen && "shadow-lg"
          }`}
        >
          <div className="flex justify-between">
            <p>Title Here</p>
            <button onClick={close_modal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 font-bold"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default memo(MyModal);
