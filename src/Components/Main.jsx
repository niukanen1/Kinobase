import React from "react";

import { Route, Link } from "react-router-dom";


import FilmCard from "./MainFilms/FilmCard";
import Trailer from "./MainFilms/Trailer";
import films from "./filmlist";

// <pics>

// <pics/>

export default class Main extends React.Component {
	render() {
		return (
			<div className='Main-page'>
				<Route path='/Trailer' component={Trailer} />
				<div className='part-classic'>
					<div className='part-title'>Классика</div>
					<div className='Main-part-films'>
						{films.map((film) => {
							if (films.indexOf(film) <= 3) {
								return (
									<Link key={film.key} to={`/filmdetails/${film.id}`}>
										<FilmCard
											PicSource={film.picUrl}
											PicAlt={film.name}
											PicTitle={film.name}
										/>
									</Link>
								);
							}
						})} 
					</div>
				</div>
				<div className='part-classic'>
					<div className='part-title'>Комедии</div>
					<div className='Main-part-films'>
						{films.map((film) => {
							if (films.indexOf(film) > 3 && films.indexOf(film) < 8) {
								return (
									<Link key={film.key} to={`/filmdetails/${film.id}`}>
										<FilmCard
											PicSource={film.picUrl}
											PicAlt={film.name}
											PicTitle={film.name}
										/>
									</Link>
								);
							}
						})} 
					</div>
				</div>
			</div>
		);
	}
}
