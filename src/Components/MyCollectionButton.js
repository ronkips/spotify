import React from "react";

const MyCollectionButton = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" >
      My Collection
    </button>
  );
};

export default MyCollectionButton;