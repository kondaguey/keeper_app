import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]:value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note)
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }
  
  return (
    <div>
      <form>
        <input 
        name="title"
        onChange= {handleChange} 
        value={note.title}
        placeholder="Title"
        />
        <textarea 
        name="content"
        onChange= {handleChange}
        value={note.content}
        placeholder="write something you don't want to forget"
        rows="3"
        /> 
          <button 
          className="button-animate"
          onClick={submitNote}
          >
            <i class="fa-solid fa-plus"></i> 
          </button>
      </form>
    </div>
  );
}

export default CreateArea;