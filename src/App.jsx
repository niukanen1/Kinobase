import React from "react";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Films from "./Components/Films";
import Contact from "./Components/Contact";
import FilmDetail from './FilmDetail';
// import Trailer from './Components/MainFilms/Trailer';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<div>
						<Nav />
						<Route path='/' exact component={Main} />
						<Route path='/Films' exact component={Films} />
						<Route path='/Contact' component={Contact} />
						<Route path='/filmdetails/:id' component={FilmDetail}/>
					</div>
				</Router>
			</div>
		);
	}
}