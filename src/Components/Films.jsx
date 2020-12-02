import React from 'react'; 
import films from './filmlist';
import { Link } from 'react-router-dom'; 
import FilmCard from './MainFilms/FilmCard';


export default class Films extends React.Component { 

    render () { 
        // films = films.sort();
        return ( 
            <div>
                <div className='filmlist'>
                    <div className='filmlist-title'>Полный Список Фильмов</div>
                    <div className='filmlist-body' >
                    {films.map((film) => {
							if (films.indexOf(film) <= 19) {
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
        )
    }
}