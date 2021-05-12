import React from "react";

function Photo({ img, user, tags }) {
    return (
        <div className="photo">
            <img src={img} alt={tags} title={tags}></img>
            <span className="photo__user">{user}</span>
            <span className="photo__tags">{tags}</span>
        </div>
    );
}

export default Photo;
