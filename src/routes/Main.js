import axios from "axios";
import React from "react";
import Photo from "../components/Photo";

class Main extends React.Component {
    state = {
        isLoading: true,
        photos: [],
    };

    getPhotos = async () => {
        const {
            data: { hits },
        } = await axios.get(
            `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}`
        );
        this.setState({ photos: hits, isLoading: false });
    };

    componentDidMount() {
        this.getPhotos();
    }

    render() {
        const { isLoading, photos } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="photos">
                        {photos.map((photo) => (
                            <Photo
                                key={photo.id}
                                img={photo.largeImageURL}
                                user={photo.user}
                                tags={photo.tags}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default Main;
