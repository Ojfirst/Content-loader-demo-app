import React from 'react';
import classes from './Result.module.css';
import Card from '../UI/Card';

const Result = (props) => {
  const { processedData } = props;

  const listItems = processedData.map((data) => (
          <li key={data.id} className={classes.item}>
            {data.name} ({data.age} years old)
          </li>
        ))

  return (
    <Card className={classes.result}>
      <ul className={classes.ul}>
        {listItems}
      </ul>
    </Card>
  );
};

export default Result;
