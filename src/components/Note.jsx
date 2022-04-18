import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  
  function handleClick(event) {
    props.onDelete(props.id)
  }
  return (
    <div className="popout">
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}><i className="fa-solid fa-trash-can"></i></button>
      </div>
    </div>
  );
}

export default Note;