import React from "react";
import ReactPlayer from "react-player";
import films from "./Components/filmlist";
// import Trailer from './Components/MainFilms/Trailer';

export default function FilmDetail({ match }) {
	let filmID = match.params.id;
	let film = films[filmID - 1];
	let filmName = film.name;
	return (
		<div className='filmpage'>
			<h1 className='filmpage-title'>{filmName}</h1>
			<div className='trailer'>
				<ReactPlayer url={film.videoUrl}>Video is loading</ReactPlayer>
			</div>
			<div className='description'>
				<div className='description-text'>{film.description}</div>
			</div>
		</div>
	);
}
