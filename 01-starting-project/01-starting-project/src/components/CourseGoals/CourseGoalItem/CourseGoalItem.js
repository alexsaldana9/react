import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" >
      {props.children} <span style={{'float': 'right'}} onClick={deleteHandler}>&#10007;</span>
    </li>
  );
};

export default CourseGoalItem;
