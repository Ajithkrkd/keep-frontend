import React, { useEffect, useState } from "react";
import customAxios from "../../store/AxiosConfig";
import Tooltip from "@mui/material/Tooltip";
function ArchivedNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getArchivedNotes();
  }, []);
  //This function is to retreive the deleted notes from the server

  const getArchivedNotes = async () => {
    try {
      const response = await customAxios.get("/users/note/getAllArchivedNotes");
      console.log(response);
      setNotes(response.data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  const moveNoteToNote = async (noteId) => {
    try {
      const response = await customAxios.post(`/users/note/archive/${noteId}`);
      console.log(response);
      setNotes((prevNotes) =>
        prevNotes.filter((note) => note.noteId !== noteId)
      );

      toast.success("note archived");
    } catch (error) {
      console.log(response);
    }
  };

  const moveNoteToBin = async (noteId) =>{
    try {

      const response = await customAxios.post(`/users/note/delete/${noteId}`)
        console.log(response)
        setNotes((prevNotes) => prevNotes.filter((note) => note.noteId !== noteId));

        toast.success("note move to bin");
    } catch (error) {
      console.log(response)
    }
  }
  return (
    <div className="row notes ">
      <h5 className="note-header btn btn-dark ">ARCHIVED NOTES</h5>

      {notes.map((note) => (
        <div key={note.noteId} className="   note mx-2 my-2 card w-100">
          <div className="">
            <h4>{note.title}</h4>
          </div>
          <div className="">
            <p>{note.subTitle}</p>
          </div>

          <div className="footer">
            <ul className="iconsArchiveDeleted">
              <li>
                <Tooltip title="Move back to Notes" arrow>
                  <i
                    onClick={() => moveNoteToNote(note.noteId)}
                    className="bx bx-upload"
                  ></i>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Move to bin" arrow>
                  <i onClick={()=>{moveNoteToBin(note.noteId)}} 
                    className="bx bxs-trash"></i>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArchivedNotes;
