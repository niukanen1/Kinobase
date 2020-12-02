import React from "react";
import Youtube from "react-youtube";

export default function Trailer(props) {
	return (
		<div>
			<Youtube
				controls={true}
				url={props.trailerUrl}
			/>
		</div>
	);
}
