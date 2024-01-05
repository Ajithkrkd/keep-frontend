import "../Notes/CreatedNote.css";
import React, { useEffect, useState } from "react";
import "../Notes/CreatedNote.css";
import customAxios from "../../store/AxiosConfig";
import toast from "react-hot-toast";
function CreatedNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const response = await customAxios.get("/users/getNote");
      console.log(response.data.notes);
      setNotes(response.data.notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };
  //delete note

  const moveNoteTobin = async (noteId) =>{
    try {

      const response = await customAxios.post(`/users/note/delete/${noteId}`)
        console.log(response)
        setNotes((prevNotes) => prevNotes.filter((note) => note.noteId !== noteId));

        toast.success("note move to bin");
    } catch (error) {
      console.log(response)
    }
  }
  //Archive note

  const moveNoteToArchive = async (noteId) =>{
    try {

      const response = await customAxios.post(`/users/note/archive/${noteId}`)
        console.log(response)
        setNotes((prevNotes) => prevNotes.filter((note) => note.noteId !== noteId));

        toast.success("note archived");
    } catch (error) {
      console.log(response)
    }
  }
  

  return (
    <div className="row notes ">
      <h5 className="note-header btn btn-dark">YOUR NOTES</h5>

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
                <i onClick={()=>moveNoteTobin(note.noteId)} className="bx bx-trash"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="bx bx-palette"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="bx bx-pencil"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="bx bx-image"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="bx bx-archive" onClick={()=>moveNoteToArchive(note.noteId)}></i>{" "}
              </li>
              <li>
                {" "}
                <i className="bx bx-bell"></i>{" "}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreatedNotes;
