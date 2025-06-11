import React from 'react';
import classes from './Result.module.css';

const Result = (props) => {
	const listItem = props.processedData
		? props.processedData.map((item) => (
				<li key={item.id}>
					{item.name} ({item.age} years old)
				</li>
		  ))
		: null;

	return (
		<div>
			<ul className={classes.ul}>
				{listItem}
				{!listItem.length && <li>No data available</li>}
			</ul>
		</div>
	);
};

export default Result;
