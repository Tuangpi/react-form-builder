import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import EditModal from "./EditModal";

const App = () => {
  const [droppedElements, setDroppedElements] = useState([]);
  const [openParagraph, setOpenParagraph] = useState(false);
  const [paraId, setParaId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleDragStart = (e, element) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(element));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedElement = JSON.parse(e.dataTransfer.getData("text/plain"));
    setDroppedElements([
      ...droppedElements,
      {
        id:
          droppedElements.length == 0
            ? 0
            : droppedElements[droppedElements.length - 1].id + 1,
        ...droppedElement,
      },
    ]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handlePara = (newContent, paraId) => {
    console.log(paraId);
    setDroppedElements((prev) =>
      prev.map((p) => {
        if (p.id === paraId) {
          return { ...p, value: newContent };
        } else {
          return p;
        }
      })
    );
  };

  const handleSave = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <>
      <div className="flex justify-between items-start space-x-4 m-5">
        <div className="rounded-md outline-none border border-slate-400 w-1/6">
          <div
            className="cursor-move border border-slate-300 px-4 py-1.5 text-center hover:bg-slate-100"
            draggable
            onDragStart={(e) =>
              handleDragStart(e, {
                type: "text",
                required: false,
                label: "Text Input",
                name: "text-1",
              })
            }
          >
            text input
          </div>
          <div
            className="cursor-move border border-slate-300 px-4 py-1.5 text-center hover:bg-slate-100"
            draggable
            onDragStart={(e) =>
              handleDragStart(e, {
                type: "textarea",
                required: false,
                label: "Text Area",
                name: "textarea-1",
              })
            }
          >
            text area
          </div>
          <div
            className="cursor-move border border-slate-300 px-4 py-1.5 text-center hover:bg-slate-100"
            draggable
            onDragStart={(e) =>
              handleDragStart(e, {
                type: "paragraph",
                value: "Enter Your Paragraph",
              })
            }
          >
            paragraph
          </div>
        </div>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="w-full drop-shadow-md border-2 border-dashed border-slate-300 outline-none shadow-lg px-4 py-6 pt-0 rounded-md min-h-48 cursor-default"
        >
          {droppedElements.length < 1 && (
            <div className="text-center text-slate-500 pt-20">Drag Here</div>
          )}
          {droppedElements.length > 0 &&
            droppedElements.map((item, index) => {
              switch (item.type) {
                case "textarea":
                  return (
                    <div
                      className="flex justify-between items-start my-4"
                      key={index}
                    >
                      <div className="flex flex-col">
                        <label>{item.label}</label>
                        <textarea
                          className="outline-none border border-red-400 py-1"
                          name={item.name}
                        ></textarea>
                      </div>
                      <div className="flex justify-between items-center space-x-2">
                        <span
                          className="bg-red-500 cursor-pointer"
                          onClick={() =>
                            setDroppedElements((prev) =>
                              prev.filter((p) => p.id !== item.id)
                            )
                          }
                        >
                          close
                        </span>
                        <span className="bg-emerald-300 cursor-pointer">
                          edit
                        </span>
                      </div>
                    </div>
                  );
                case "password":
                case "text":
                  return (
                    <div
                      className="flex justify-between items-start my-4"
                      key={index}
                    >
                      <div className="flex flex-col">
                        <label>{item.label}</label>
                        <input
                          className="outline-none border border-red-400 py-1"
                          type={item.type}
                          name={item.name}
                        />
                      </div>
                      <div className="flex justify-between items-center space-x-2">
                        <span
                          className="bg-red-500 cursor-pointer"
                          onClick={() =>
                            setDroppedElements((prev) =>
                              prev.filter((p) => p.id !== item.id)
                            )
                          }
                        >
                          close
                        </span>
                        <span className="bg-emerald-300 cursor-pointer">
                          edit
                        </span>
                      </div>
                    </div>
                  );
                case "paragraph":
                  return (
                    <div
                      className="flex justify-between items-start"
                      key={index}
                    >
                      <p
                        className="py-2"
                        dangerouslySetInnerHTML={{ __html: item.value }}
                      ></p>
                      <div className="flex justify-between items-center space-x-2">
                        <span
                          className="bg-red-500 cursor-pointer"
                          onClick={() =>
                            setDroppedElements((prev) =>
                              prev.filter((p) => p.id !== item.id)
                            )
                          }
                        >
                          close
                        </span>
                        <span
                          className="cursor-pointer bg-emerald-300"
                          onClick={() => {
                            setOpenParagraph(true);
                            setParaId(item.id);
                          }}
                        >
                          edit
                        </span>
                      </div>
                    </div>
                  );
                default:
                  return <input type="text" name={item.name} />;
              }
            })}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-green-500 rounded-md px-2 py-1"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      {openParagraph && (
        <EditModal
          close={() => setOpenParagraph(false)}
          show={openParagraph}
          maxWidth="w-11/12 -mt-[1rem]"
          handlePara={handlePara}
          paraId={paraId}
        />
      )}
      {showForm && <div>{JSON.stringify(droppedElements)}</div>}
    </>
  );
};
export default App;
