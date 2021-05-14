import React from "react";

class Details extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const {
            location: {
                state: { img, user, tags },
            },
        } = this.props;
        if (this.props.location) {
            return (
                <div className="container">
                    <div className="details">
                        <img
                            src={img}
                            alt={tags}
                            title={`${user}'s photo`}
                        ></img>
                        <span className="details__user">{user}</span>
                        <span className="details__tags">{tags}</span>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Details;
