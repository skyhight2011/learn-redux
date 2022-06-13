import React from 'react';

function Filter({ data }) {
	const handleShowAll = () => {};
	const handleShowActive = () => {};
	const handleShowCompleted = () => {};
	return (
		<div>
			<span>Show: </span>
			<button onClick={handleShowAll}>all</button>
			<button onClick={handleShowActive}>active</button>
			<button onClick={handleShowCompleted}>completed</button>
		</div>
	);
}

export default Filter;
