import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-3 ">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p>Tag : {note.tag}</p>
          <i
            className="fa-solid fa-trash mx-3"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Succesfully Deleted", "success");
            }}
          />
          <i
            className="far fa-edit mx-3"
            onClick={() => {
              updateNote(note);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
