import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";

//{items: [], heading: string}
interface Props{
  items: string[];
  heading: string;
}


function ListGroup({items, heading, onSelectItem}:Props) {
  
  //event handler
  const handleClick=(event:MouseEvent)=> console.log(event)
  const [selectedIndex, setSelectedIndex]=useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length===0 && <p>No item found</p>}
      <ul className="list-group">
      {items.map((item, index)=> (
      <li 
      className={
        selectedIndex===index 
        ? "list-group-item active" 
        : "list-group-item"
      }
      
      key={item} 
      onClick={()=>{setSelectedIndex(index);
        onSelectItem(item);

      }}
      >
        {item}
        </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
