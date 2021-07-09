import React from 'react';

const PersonCard = (props) => {
 let {name,age,hair} = props.person
  return (
    <div className="card-body">
    	<h5>{name}</h5>
    	<p>Age: {age}</p>
    	<p>Hair Color{hair}</p>
    </div>
  )
}

export default PersonCard;