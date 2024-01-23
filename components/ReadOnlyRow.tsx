import React from "react";

const ReadOnlyRow = ({ size, handleEditClick, handleDeleteClick }: any) => {
  return (
    <div className="flex justify-between mb-2">
      <div className="flex gap-x-5">
        <p>{size.title}</p>
        <p>{size.extraPrice} تومان</p>
      </div>
      <div className="flex gap-x-5">
        <button className="bg-yellow-400 text-white rounded-md px-1  h-6" type="button" onClick={(event) => handleEditClick(event, size)}>
          Edit
        </button>
        <button className="bg-red-400 text-white rounded-md px-1  h-6" type="button" onClick={() => handleDeleteClick(size.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReadOnlyRow;
