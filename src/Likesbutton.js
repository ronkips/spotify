import React from "react";

const likesButton = ({onClick}) => {
    return(
        <button onClick={onClick} type="button" >
            Likes
        </button>
    );
};

export default likesButton;