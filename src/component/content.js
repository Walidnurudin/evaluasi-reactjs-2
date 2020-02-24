import React from 'react';
import '../App.css';

const Content = ({title, pubDate, author, thumbnail, handleClick}) => {
	return (
		<div className="content">
			<img src={thumbnail} className="poto" onClick = {handleClick} />
			<h3 onClick = {handleClick}> {title} </h3>
			<p>{pubDate}</p>
			<p>{author}</p>
		</div>
	);
}

export default Content;