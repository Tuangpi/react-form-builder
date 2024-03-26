import { useState } from "react";
import Modal from "./Modal";

const EditTextInputModal = ({
  show,
  close,
  maxWidth,
  handleEdit,
  handleCheckBox,
  handleRadioBox,
  handleButton,
  handleSelect,
  item,
}) => {
  const [label, setLabel] = useState(item.label);
  const [type, setType] = useState(item.type);
  const [placeHolder, setPlaceHolder] = useState(item.placeHolder);
  const [width, setWidth] = useState(item.width);
  const [required, setRequired] = useState(item.required);
  const [checkboxGroup, setCheckBoxGroup] = useState(item.data);
  const [radioGroup, setRadioGroup] = useState(item.data);
  const [bgColor, setBgColor] = useState(item.bgColor);
  const [fontColor, setFontColor] = useState(item.fontColor);
  const [options, setOptions] = useState(item.options);

  const handleConfirm = () => {
    handleEdit(item.id, label, type, placeHolder, width, required);
    if (item.type == "checkbox-group") {
      handleCheckBox(item.id, checkboxGroup);
    }
    if (item.type == "radio-group") {
      handleRadioBox(item.id, radioGroup);
    }
    if (item.type == "button") {
      handleButton(item.id, label, type, width, bgColor, fontColor);
    }
    if (item.type == "select") {
      handleSelect(item.id, label, type, width, options);
    }
    close();
  };

  return (
    <Modal show={show} onClose={close} maxWidth={maxWidth}>
      <div className="p-4">
        <div className="flex justify-between items-center bg-slate-100 w-full py-1 pl-1">
          <div>Edit</div>
          <div
            className="px-2 bg-rose-500 rounded-md text-white font-medium cursor-pointer"
            onClick={close}
          >
            &times;
          </div>
        </div>
        <div className="mt-5 min-h-48 max-h-60 overflow-auto">
          {(item.type == "text" ||
            item.type == "password" ||
            item.type == "email" ||
            item.type == "number" ||
            item.type == "color") && (
            <form onSubmit={handleConfirm}>
              <div className="grid grid-cols-12 items-center">
                <label htmlFor="required" className="col-span-2">
                  Required :
                </label>
                <div className="col-span-10 text-left">
                  <input
                    id="required"
                    type="checkbox"
                    value={required}
                    onChange={(e) => setRequired((prev) => !prev)}
                    className="block"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center mt-4">
                <label htmlFor="label" className="col-span-2">
                  Label :
                </label>
                <div className="col-span-10 text-left">
                  <input
                    id="label"
                    type="text"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    placeholder="Enter Your Label"
                    className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center mt-4">
                <label htmlFor="type" className="col-span-2">
                  Type :
                </label>
                <div className="col-span-10 text-left">
                  <select
                    name="type"
                    className="w-1/3 py-1.5 pl-2 rounded-md outline-none border border-slate-200 focus:border-slate-300"
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="text">text</option>
                    <option value="number">number</option>
                    <option value="email">email</option>
                    <option value="color">color</option>
                    <option value="password">password</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center mt-4">
                <label htmlFor="placeHolder" className="col-span-2">
                  Place Holder :
                </label>
                <div className="col-span-10 text-left">
                  <input
                    id="placeHolder"
                    type="text"
                    value={placeHolder}
                    onChange={(e) => setPlaceHolder(e.target.value)}
                    className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center mt-4">
                <label htmlFor="width" className="col-span-2">
                  Width :
                </label>
                <div className="col-span-10 text-left">
                  <input
                    id="width"
                    type="number"
                    value={width}
                    placeholder="Width in Percent"
                    max="100"
                    min="0"
                    onChange={(e) => setWidth(e.target.value)}
                    className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                  />
                </div>
              </div>
              <button className="bg-blue-500 text-white rounded-md outline-none px-4 py-1 mt-6">
                Update
              </button>
            </form>
          )}
          {item.type == "textarea" && (
            <form onSubmit={handleConfirm}>
              <div className="grid grid-cols-12 items-center">
                <label htmlFor="required" className="col-span-2">
                  Required :
                </label>
                <div className="col-span-10 text-left">
                  <input
                    id="required"
                    type="checkbox"
                    value={required}
                    onChange={(e) => setRequired((prev) => !prev)}
                    className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center mt-4">
                <label htmlFor="label" className="col-span-2">
                  Label :
                </label>
                <div className="col-span-10 text-left">
                  <input
                    id="label"
                    type="text"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center mt-4">
                <label htmlFor="label" className="col-span-2">
                  Place Holder :
                </label>
                <div className="col-span-10 text-left">
                  <input
                    id="label"
                    type="text"
                    value={placeHolder}
                    onChange={(e) => setPlaceHolder(e.target.value)}
                    className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center mt-4">
                <label htmlFor="width" className="col-span-2">
                  Width :
                </label>
                <div className="col-span-10 text-left">
                  <input
                    id="width"
                    type="number"
                    value={width}
                    placeholder="Width in Percent"
                    max="100"
                    min="0"
                    onChange={(e) => setWidth(e.target.value)}
                    className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                  />
                </div>
              </div>
              <button className="bg-blue-500 text-white rounded-md outline-none px-4 py-1 mt-6">
                Update
              </button>
            </form>
          )}
          {item.type == "checkbox-group" && (
            <form onSubmit={handleConfirm}>
              <div className="w-full p-4 bg-slate-300 rounded-md mb-2">
                <table>
                  <thead>
                    <tr>
                      <th className="text-left">Label</th>
                      <th className="text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checkboxGroup.map((checkbox, index) => (
                      <tr key={index}>
                        <td className="text-left">
                          <input
                            id="label"
                            value={checkbox.label}
                            onChange={(e) =>
                              setCheckBoxGroup((prev) =>
                                prev.map((p) => {
                                  if (p.id == checkbox.id) {
                                    return { ...p, label: e.target.value };
                                  } else {
                                    return p;
                                  }
                                })
                              )
                            }
                            className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                          />
                        </td>
                        <td className="text-left">
                          <input
                            id="value"
                            value={checkbox.value}
                            onChange={(e) =>
                              setCheckBoxGroup((prev) =>
                                prev.map((p) => {
                                  if (p.id == checkbox.id) {
                                    return { ...p, value: e.target.value };
                                  } else {
                                    return p;
                                  }
                                })
                              )
                            }
                            className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                          />
                        </td>
                        {checkboxGroup.length > 1 && (
                          <td>
                            <span
                              className="cursor-pointer bg-red-500 px-2 py-1 rounded-md"
                              onClick={() =>
                                setCheckBoxGroup((prev) =>
                                  prev.filter((p) => p.id !== checkbox.id)
                                )
                              }
                            >
                              delete
                            </span>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end items-center">
                <span
                  className="cursor-pointer bg-green-500 px-4 py-1 rounded-md text-white"
                  onClick={() =>
                    setCheckBoxGroup((prev) => [
                      ...prev,
                      {
                        id: prev.length == 0 ? 0 : prev[prev.length - 1].id + 1,
                        label: "New Labe",
                        value: "New Value",
                      },
                    ])
                  }
                >
                  add
                </span>
              </div>
              <button className="bg-blue-500 text-white rounded-md outline-none px-4 py-1 mt-6">
                Update
              </button>
            </form>
          )}
          {item.type == "radio-group" && (
            <form onSubmit={handleConfirm}>
              <div className="w-full p-4 bg-slate-300 rounded-md mb-2">
                <table>
                  <thead>
                    <tr>
                      <th className="text-left">Label</th>
                      <th className="text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {radioGroup.map((radio, index) => (
                      <tr key={index}>
                        <td className="text-left">
                          <input
                            id="label"
                            value={radio.label}
                            onChange={(e) =>
                              setRadioGroup((prev) =>
                                prev.map((p) => {
                                  if (p.id == radio.id) {
                                    return { ...p, label: e.target.value };
                                  } else {
                                    return p;
                                  }
                                })
                              )
                            }
                            className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                          />
                        </td>
                        <td className="text-left">
                          <input
                            id="value"
                            value={radio.value}
                            onChange={(e) =>
                              setRadioGroup((prev) =>
                                prev.map((p) => {
                                  if (p.id == radio.id) {
                                    return { ...p, value: e.target.value };
                                  } else {
                                    return p;
                                  }
                                })
                              )
                            }
                            className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                          />
                        </td>
                        {radioGroup.length > 1 && (
                          <td>
                            <span
                              className="cursor-pointer bg-red-500 px-2 py-1 rounded-md"
                              onClick={() =>
                                setRadioGroup((prev) =>
                                  prev.filter((p) => p.id !== radio.id)
                                )
                              }
                            >
                              delete
                            </span>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end items-center">
                <span
                  className="cursor-pointer bg-green-500 px-4 py-1 rounded-md text-white"
                  onClick={() =>
                    setRadioGroup((prev) => [
                      ...prev,
                      {
                        id: prev.length == 0 ? 0 : prev[prev.length - 1].id + 1,
                        label: "New Label",
                        value: "New Value",
                        name: radioGroup[0].name,
                      },
                    ])
                  }
                >
                  add
                </span>
              </div>
              <button className="bg-blue-500 text-white rounded-md outline-none px-4 py-1 mt-6">
                Update
              </button>
            </form>
          )}
          {item.type == "button" && (
            <form onSubmit={handleConfirm}>
              <div className="grid grid-cols-12 items-center">
                <label htmlFor="label" className="col-span-2">
                  Label :
                </label>
                <div className="col-span-10 text-left">
                  <input
                    id="label"
                    type="text"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center mt-4">
                <label htmlFor="bgColor" className="col-span-2">
                  Background Color :
                </label>
                <div className="col-span-10 text-left">
                  <input
                    id="bgColor"
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="block outline-none border border-slate-300 rounded-md py-1 px-2 focus:border-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center mt-4">
                <label htmlFor="fontColor" className="col-span-2">
                  Font Color :
                </label>
                <div className="col-span-10 text-left">
                  <input
                    id="fontColor"
                    type="color"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                    className="block outline-none border border-slate-300 rounded-md py-1 px-2 focus:border-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center mt-4">
                <label htmlFor="width" className="col-span-2">
                  Width :
                </label>
                <input
                  id="width"
                  type="number"
                  value={width}
                  placeholder="Width in Percent"
                  max="100"
                  min="0"
                  onChange={(e) => setWidth(e.target.value)}
                  className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                />
              </div>
              <button className="bg-blue-500 text-white rounded-md outline-none px-4 py-1 mt-6">
                Update
              </button>
            </form>
          )}
          {item.type == "select" && (
            <form onSubmit={handleConfirm}>
              <div className="grid grid-cols-12 items-center">
                <label htmlFor="label" className="col-span-2">
                  Label :
                </label>
                <div className="col-span-10 text-left">
                  <input
                    id="label"
                    type="text"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center">
                <label htmlFor="width" className="col-span-2">
                  Width :
                </label>
                <div className="col-span-10 text-left mt-4">
                  <input
                    id="width"
                    type="number"
                    value={width}
                    placeholder="Width in Percent"
                    max="100"
                    min="0"
                    onChange={(e) => setWidth(e.target.value)}
                    className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                  />
                </div>
              </div>
              <div className="w-full bg-slate-200 p-3 mt-4 rounded-md">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Name</th>
                      <th className="text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {options.map((option, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            value={option.name}
                            onChange={(e) =>
                              setOptions((prev) =>
                                prev.map((p) => {
                                  if (p.id == option.id) {
                                    return { ...p, name: e.target.value };
                                  } else {
                                    return p;
                                  }
                                })
                              )
                            }
                            className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                          />
                        </td>
                        <td>
                          <input
                            value={option.value}
                            onChange={(e) =>
                              setOptions((prev) =>
                                prev.map((p) => {
                                  if (p.id == option.id) {
                                    return { ...p, value: e.target.value };
                                  } else {
                                    return p;
                                  }
                                })
                              )
                            }
                            className="block outline-none border border-slate-300 rounded-md py-1 pl-1 focus:border-slate-400"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-end mt-2">
                <span
                  className="cursor-pointer bg-green-500 px-3 py-1 rounded-md text-white"
                  onClick={() =>
                    setOptions((prev) => [
                      ...prev,
                      {
                        id: prev.length == 0 ? 0 : prev[prev.length - 1].id + 1,
                        name: "New Option",
                        value: "New Value",
                      },
                    ])
                  }
                >
                  Add
                </span>
              </div>
              <button className="bg-blue-500 text-white rounded-md outline-none px-4 py-1 mt-6">
                Update
              </button>
            </form>
          )}
        </div>
      </div>
    </Modal>
  );
};
export default EditTextInputModal;
