import React from "react";
import { Link } from "react-router-dom";

function Photo({ img, user, tags }) {
    return (
        <Link
            to={{
                pathname: "/photo-detail",
                state: {
                    img,
                    user,
                    tags,
                },
            }}
        >
            <div className="photo">
                <img src={img} alt={tags} title={tags}></img>
                <span className="photo__user">{user}</span>
                <span className="photo__tags">{tags}</span>
            </div>
        </Link>
    );
}

export default Photo;
