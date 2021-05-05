import React from "react";

class App extends React.Component {
	state = {
		isLoading: true,
		photos: [],
	};

	constructor() {}

	render() {
		const { isLoading, photos } = this.state;
		return (
			<section className="container">
				{ isLoading ? (

				) : (
					
				)}
			</section>
		)
	}
}

export default App;
