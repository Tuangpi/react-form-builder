import JoditEditor from "jodit-react";
import Modal from "./Modal";
import { useRef, useState } from "react";

const EditModal = ({ show, close, maxWidth, handlePara, paraId }) => {
  const [content, setContent] = useState("Paragraph");
  const editor = useRef(null);

  return (
    <Modal show={show} onClose={close} maxWidth={maxWidth}>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>Edit</div>
          <div
            className="px-2 bg-rose-500 rounded-md text-white font-medium cursor-pointer"
            onClick={close}
          >
            &times;
          </div>
        </div>
        <div className="mt-5 h-[32rem] overflow-auto">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => {
              setContent(newContent);
              handlePara(newContent, paraId);
            }}
          />
        </div>
      </div>
    </Modal>
  );
};
export default EditModal;
