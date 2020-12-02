import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
	render() {
		return (
			<div>
				<div>
					<div className='upper-header'>
						<div className='phrase'>
							<div className='phrase-above'>Кинобаза</div>
							<div className='phrase-below'>Кино - наша страсть!</div>
						</div>
						<div></div>
					</div>
					<div className='down-header'>
						<div className='links-field'>
							<Link className='links' to='/'>
								<div>Main</div>
							</Link>

							<Link className='links' to='/Films'>
								<div>Films</div>
							</Link>

							<Link className='links' to='Contact'>
								<div>Contact</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
