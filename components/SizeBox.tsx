"use client";
import React, { useState, Fragment } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";


type SizeBoxProps={
  sizes:any,
  setSizes:any
}
const SizeBox = ({sizes,setSizes}:SizeBoxProps) => {

  const [addFormData, setAddFormData] = useState({
    title: "",
    extraPrice: "",
  });

  const [editFormData, setEditFormData] = useState({
    title: "",
    extraPrice: "",
  });

  const [editContactId, setEditContactId] = useState<any>(null);

  const handleAddFormChange = (event: any) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData: any = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event: any) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData: any = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const editButtonHandler = () => {
    const sizesArr = [...sizes];
    const newSize = sizesArr.map((arr) => {
      if (arr.id === editContactId) {
        return editFormData;
      }
      return arr;
    });
    setSizes(newSize);
    setEditContactId(null);
  };

  const handleEditClick = (event: any, size: size) => {
    event.preventDefault();
    setEditContactId(size.id);

    const formValues = {
      title: size.title,
      extraPrice: size.extraPrice,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId: string) => {
    const sizesArr = [...sizes];
    const newSize = sizesArr.filter((size) => size.id !== contactId);
    setSizes(newSize);
  };

  const addHandler = (e: any) => {
    e.preventDefault();
    setSizes((prev: any) => {
      return [...prev, { ...addFormData, id: crypto.randomUUID() }];
    });

    setAddFormData({
      title: "",
      extraPrice: "",
    });
  };

  return (
    <div className="bg-slate-200 w-96 min-h-28 rounded-md p-2">
      <div>
        <div className="">
          {sizes.map((size: size) => (
            <>
              {editContactId === size.id ? (
                <EditableRow
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                  editButtonHandler={editButtonHandler}
                />
              ) : (
                <ReadOnlyRow
                  size={size}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={() => handleDeleteClick(size.id!)}
                />
              )}
            </>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-3">
        <input
          type="text"
          name="title"
          placeholder="سایز"
          onChange={handleAddFormChange}
          value={addFormData.title}
          className="rounded p-1"
        />
        <input
          type="text"
          name="extraPrice"
          placeholder="قیمت اضافه"
          onChange={handleAddFormChange}
          value={addFormData.extraPrice}
          className="rounded p-1"
        />
        <button
          className="bg-blue-400 text-white rounded-md"
          onClick={addHandler}
          type="button"
        >
          اضافه کردن
        </button>
      </div>
    </div>
  );
};

export default SizeBox;
