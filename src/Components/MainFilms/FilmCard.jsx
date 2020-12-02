import React from "react";
// import Trailer from "./Trailer";

export default class FilmCard extends React.Component {
	render() {
		return (
			<div>
				<div className='filmcard-pic-container' key={this.props.FilmKey}>
					<img
						className='filmcard-pic'
						src={this.props.PicSource}
						alt={this.props.PicAlt}
						title={this.props.PicTitle}
					/>
				</div>
			</div>
		);
	}
}
