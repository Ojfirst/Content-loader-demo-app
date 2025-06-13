import React from 'react';
import classes from './Result.module.css';
import Card from '../UI/Card';

const Result = (props) => {
console.log(props.processedData)

	const listItem = props.processedData
		? props.processedData.map((item) => (
        <Card>
					<li key={item.id} className={classes.li}>
						{item.name} ({item.age} years old)
					</li>
        </Card>
			
		  ))
		: null;
	return (
		
			<ul className={classes.ul}>
				{listItem}
				{!listItem.length && <li>No data available</li>}
			</ul>

	);
};

export default Result;
