import React from "react";


type EditableRowProps={

}

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  editButtonHandler,
}: any) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-y-2">
        <input
          type="text"
          placeholder="Enter a name..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        />

        <input
          type="text"
          placeholder="Enter an address..."
          name="extraPrice"
          value={editFormData.extraPrice}
          onChange={handleEditFormChange}
        />
      </div>

      <div className="flex gap-x-5">
        <button className="bg-green-400 text-white rounded-md px-1 h-6" type="button" onClick={editButtonHandler}>
          Save
        </button>
        <button  className="bg-red-400 text-white rounded-md px-1 h-6" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditableRow;
