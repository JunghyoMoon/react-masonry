import React from "react";

function Photo({ img, user, tags }) {
    return (
        <div className="photo">
            <img src={img} alt={tags} title={tags}></img>
            <span>{user}</span>
            <span>{tags}</span>
        </div>
    );
}

export default Photo;
