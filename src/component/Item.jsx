import {useState} from 'react';

function Item({ obj,set }) {

  return (
    <li>
      <p>{obj.photo}</p>
      <button onClick={()=>{set(obj.id)}}>좋아요{obj.like}</button>
    </li>
  );
}

export default Item;