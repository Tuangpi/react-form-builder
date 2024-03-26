import { useState } from "react";
import EditModal from "./EditModal";
import EditTextInputModal from "./EditTextInputModal";

const App = () => {
  const [droppedElements, setDroppedElements] = useState([]);
  const [openParagraph, setOpenParagraph] = useState(false);
  const [paraId, setParaId] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [item, setItem] = useState(null);
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

  const handleEdit = (itemId, label, type, placeHolder, width, required) => {
    setDroppedElements((prev) =>
      prev.map((p) => {
        if (p.id === itemId) {
          return {
            ...p,
            label,
            type,
            placeHolder,
            width: width,
            required,
          };
        } else {
          return p;
        }
      })
    );
  };

  const handleCheckBox = (itemId, checkboxGroup) => {
    setDroppedElements((prev) =>
      prev.map((p) => {
        if (p.id === itemId) {
          return {
            ...p,
            data: checkboxGroup,
          };
        } else {
          return p;
        }
      })
    );
  };

  const handleRadioBox = (itemId, radioGroup) => {
    setDroppedElements((prev) =>
      prev.map((p) => {
        if (p.id === itemId) {
          return {
            ...p,
            data: radioGroup,
          };
        } else {
          return p;
        }
      })
    );
  };

  const handleButton = (itemId, label, type, width, bgColor, fontColor) => {
    setDroppedElements((prev) =>
      prev.map((p) => {
        if (p.id === itemId) {
          return {
            ...p,
            label,
            type,
            width,
            bgColor,
            fontColor,
          };
        } else {
          return p;
        }
      })
    );
  };

  const handleSelect = (itemId, label, type, width, options) => {
    setDroppedElements((prev) =>
      prev.map((p) => {
        if (p.id === itemId) {
          return {
            ...p,
            label,
            type,
            width,
            options,
          };
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
            className="cursor-move border border-slate-300 px-4 py-1.5 hover:bg-slate-100"
            draggable
            onDragStart={(e) =>
              handleDragStart(e, {
                type: "text",
                required: false,
                label: "Change Your Label",
                placeHolder: "Change Your Placeholder",
                width: 50,
              })
            }
          >
            Text Input
          </div>
          <div
            className="cursor-move border border-slate-300 px-4 py-1.5 hover:bg-slate-100"
            draggable
            onDragStart={(e) =>
              handleDragStart(e, {
                type: "textarea",
                required: false,
                label: "Change Your Label",
                placeHolder: "Change Your Placeholder",
                width: 50,
              })
            }
          >
            Text Area
          </div>
          <div
            className="cursor-move border border-slate-300 px-4 py-1.5 hover:bg-slate-100"
            draggable
            onDragStart={(e) =>
              handleDragStart(e, {
                type: "checkbox-group",
                data: [
                  {
                    id: 0,
                    label: "Check Box1",
                    value: "checkbox1",
                  },
                ],
              })
            }
          >
            Check Box
          </div>
          <div
            className="cursor-move border border-slate-300 px-4 py-1.5 hover:bg-slate-100"
            draggable
            onDragStart={(e) =>
              handleDragStart(e, {
                type: "radio-group",
                data: [
                  {
                    id: 0,
                    label: "Radio Box 1",
                    value: "radiobox1",
                  },
                ],
              })
            }
          >
            Radio Box
          </div>
          <div
            className="cursor-move border border-slate-300 px-4 py-1.5 hover:bg-slate-100"
            draggable
            onDragStart={(e) =>
              handleDragStart(e, {
                type: "select",
                label: "Change Label",
                options: [{ id: 0, name: "Option 1", value: "option-1" }],
                width: 50,
              })
            }
          >
            Select
          </div>
          <div
            className="cursor-move border border-slate-300 px-4 py-1.5 hover:bg-slate-100"
            draggable
            onDragStart={(e) =>
              handleDragStart(e, {
                type: "button",
                label: "Button",
                width: 50,
                bgColor: "red",
                fontColor: "white",
              })
            }
          >
            Button
          </div>
          <div
            className="cursor-move border border-slate-300 px-4 py-1.5 hover:bg-slate-100"
            draggable
            onDragStart={(e) =>
              handleDragStart(e, {
                type: "paragraph",
                value: "Enter Your Paragraph",
              })
            }
          >
            Paragraph
          </div>
        </div>

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="w-5/6 drop-shadow-md border-2 border-dashed border-slate-300 outline-none shadow-lg px-4 py-6 pt-0 rounded-md min-h-48 cursor-default"
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
                      className="flex justify-between items-start my-2"
                      key={index}
                    >
                      <div className="flex flex-col w-11/12">
                        <div>
                          <label className="mr-1">{item.label}</label>{" "}
                          {item.required && (
                            <span className="text-red-700 text-lg">*</span>
                          )}
                        </div>
                        <textarea
                          className="rounded-md pl-2 mt-1 outline-none border border-slate-300 focus:border-slate-400 py-1"
                          name={item.name}
                          placeholder={item.placeHolder}
                          style={{ width: item.width + "%" }}
                        ></textarea>
                      </div>
                      <div className="flex justify-end items-center space-x-2 w-1/12">
                        <span
                          className="bg-red-500 cursor-pointer px-2 rounded-md"
                          onClick={() =>
                            setDroppedElements((prev) =>
                              prev.filter((p) => p.id !== item.id)
                            )
                          }
                        >
                          &times;
                        </span>
                        <span
                          className="bg-amber-400 cursor-pointer px-2 rounded-md"
                          onClick={() => {
                            setOpenEditModal(true);
                            setItem(item);
                          }}
                        >
                          edit
                        </span>
                      </div>
                    </div>
                  );
                case "password":
                case "email":
                case "number":
                case "color":
                case "text":
                  return (
                    <div
                      className="flex justify-between items-start my-2"
                      key={index}
                    >
                      <div className="flex flex-col w-11/12">
                        <div>
                          <label className="mr-1">{item.label}</label>{" "}
                          {item.required && (
                            <span className="text-red-700 text-lg">*</span>
                          )}
                        </div>
                        <input
                          className="rounded-md pl-2 mt-1 outline-none border border-slate-300 focus:border-slate-400 py-1"
                          style={{ width: item.width + "%" }}
                          type={item.type}
                          name={item.name}
                          required={item.required}
                          placeholder={item.placeHolder}
                        />
                      </div>
                      <div className="flex justify-end items-center space-x-2 w-1/12">
                        <span
                          className="bg-red-500 cursor-pointer px-2 rounded-md"
                          onClick={() =>
                            setDroppedElements((prev) =>
                              prev.filter((p) => p.id !== item.id)
                            )
                          }
                        >
                          &times;
                        </span>
                        <span
                          className="bg-amber-400 cursor-pointer px-2 rounded-md"
                          onClick={() => {
                            setOpenEditModal(true);
                            setItem(item);
                          }}
                        >
                          edit
                        </span>
                      </div>
                    </div>
                  );
                case "checkbox-group":
                  return (
                    <div
                      className="flex justify-between items-start my-2"
                      key={index}
                    >
                      <div
                        className="flex flex-col items-start my-4"
                        key={index}
                      >
                        {item.data.map((data, i) => (
                          <div className="flex items-center space-x-2" key={i}>
                            <input
                              className="outline-none border border-red-400 py-1"
                              type="checkbox"
                              id={`checkbox${item.id}${i}`}
                              name={"checkbox" + item.id}
                              value={item.value}
                            />
                            <label htmlFor={`checkbox${item.id}${i}`}>
                              {data.label}
                            </label>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center space-x-2">
                        <span
                          className="bg-red-500 cursor-pointer px-2 rounded-md"
                          onClick={() =>
                            setDroppedElements((prev) =>
                              prev.filter((p) => p.id !== item.id)
                            )
                          }
                        >
                          &times;
                        </span>
                        <span
                          className="bg-amber-400 cursor-pointer px-2 rounded-md"
                          onClick={() => {
                            setOpenEditModal(true);
                            setItem(item);
                          }}
                        >
                          edit
                        </span>
                      </div>
                    </div>
                  );
                case "radio-group":
                  return (
                    <div
                      className="flex justify-between items-start my-2"
                      key={index}
                    >
                      <div
                        className="flex flex-col items-start my-4"
                        key={index}
                      >
                        {item.data.map((data, i) => (
                          <div className="flex items-center space-x-2" key={i}>
                            <input
                              className="outline-none border border-red-400 py-1"
                              type="radio"
                              name={"radio" + item.id}
                              id={"radio" + item.id + i}
                              value={data.value}
                            />
                            <label htmlFor={"radio" + item.id + i}>
                              {data.label}
                            </label>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center space-x-2">
                        <span
                          className="bg-red-500 cursor-pointer px-2 rounded-md"
                          onClick={() =>
                            setDroppedElements((prev) =>
                              prev.filter((p) => p.id !== item.id)
                            )
                          }
                        >
                          &times;
                        </span>
                        <span
                          className="bg-amber-400 cursor-pointer px-2 rounded-md"
                          onClick={() => {
                            setOpenEditModal(true);
                            setItem(item);
                          }}
                        >
                          edit
                        </span>
                      </div>
                    </div>
                  );
                case "select":
                  return (
                    <div
                      className="flex justify-between items-start my-2"
                      key={index}
                    >
                      <div className="flex flex-col w-11/12">
                        <label htmlFor="select">{item.label}</label>
                        <select
                          id="select"
                          className="py-1 mt-1 outline-none border border-slate-200 focus:border-slate-300"
                          style={{ width: item.width + "%" }}
                        >
                          {item.options.map((option, i) => (
                            <option value={option.value} key={i}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex justify-end items-center space-x-2 w-1/12">
                        <span
                          className="bg-red-500 cursor-pointer px-2 rounded-md"
                          onClick={() =>
                            setDroppedElements((prev) =>
                              prev.filter((p) => p.id !== item.id)
                            )
                          }
                        >
                          &times;
                        </span>
                        <span
                          className="bg-amber-400 cursor-pointer px-2 rounded-md"
                          onClick={() => {
                            setOpenEditModal(true);
                            setItem(item);
                          }}
                        >
                          edit
                        </span>
                      </div>
                    </div>
                  );
                case "button":
                  return (
                    <div
                      className="flex justify-between items-start my-2"
                      key={index}
                    >
                      <div
                        className="flex flex-col items-start my-4 w-11/12"
                        key={index}
                      >
                        <button
                          className="px-2 py-1 rounded-md block"
                          style={{
                            width: item.width + "%",
                            backgroundColor: item.bgColor,
                            color: item.fontColor,
                          }}
                        >
                          {item.label}
                        </button>
                      </div>
                      <div className="flex justify-end items-center space-x-2 w-1/12">
                        <span
                          className="bg-red-500 cursor-pointer px-2 rounded-md"
                          onClick={() =>
                            setDroppedElements((prev) =>
                              prev.filter((p) => p.id !== item.id)
                            )
                          }
                        >
                          &times;
                        </span>
                        <span
                          className="bg-amber-400 cursor-pointer px-2 rounded-md"
                          onClick={() => {
                            setOpenEditModal(true);
                            setItem(item);
                          }}
                        >
                          edit
                        </span>
                      </div>
                    </div>
                  );
                case "paragraph":
                  return (
                    <div
                      className="flex justify-between items-start my-2"
                      key={index}
                    >
                      <p
                        className="py-2"
                        dangerouslySetInnerHTML={{ __html: item.value }}
                      ></p>
                      <div className="flex justify-between items-center space-x-2">
                        <span
                          className="bg-red-500 cursor-pointer px-2 rounded-md"
                          onClick={() =>
                            setDroppedElements((prev) =>
                              prev.filter((p) => p.id !== item.id)
                            )
                          }
                        >
                          &times;
                        </span>
                        <span
                          className="cursor-pointer bg-amber-400 px-2 rounded-md"
                          onClick={() => {
                            setOpenParagraph(true);
                            setParaId(item);
                          }}
                        >
                          edit
                        </span>
                      </div>
                    </div>
                  );
                default:
                  return <div>{item.type}</div>;
              }
            })}
        </div>
      </div>

      <div className="w-5/6 ml-auto flex justify-center items-center">
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

      {openEditModal && item && (
        <EditTextInputModal
          close={() => {
            setOpenEditModal(false);
            setItem(null);
          }}
          show={openEditModal}
          maxWidth="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 -mt-[14rem]"
          item={item}
          handleEdit={handleEdit}
          handleCheckBox={handleCheckBox}
          handleRadioBox={handleRadioBox}
          handleButton={handleButton}
          handleSelect={handleSelect}
        />
      )}
      {showForm && <div>{JSON.stringify(droppedElements)}</div>}
    </>
  );
};
export default App;
