import React, { useEffect, useState } from "react";
import customAxios from "../../store/AxiosConfig";

function DeletedNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getDeletedNotes();
  }, []);
  //This function is to retreive the deleted notes from the server

  const getDeletedNotes = async () => {
    try {
      const response = await customAxios.get("/users/note/getAllDeletedNotes");
      console.log(response);
      setNotes(response.data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row notes ">
      <h5
        className="note-header btn btn-dark "
        
      >
        DELETED NOTES
      </h5>

      {notes.map((note) => (
        <div key={note.noteId} className="   note mx-2 my-2 card w-100">
          <div className="">
            <h4>{note.title}</h4>
          </div>
          <div className="">
            <p>{note.subTitle}</p>
          </div>

          <div className="footer">
            <ul className="iconList">
              <li>
                {" "}
                <i
                  onClick={() => moveNoteTobin(note.noteId)}
                  className="bx bx-trash"
                ></i>{" "}
              </li>
              <li>
                {" "}
                <i className="bx bx-palette"></i>{" "}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeletedNotes;
