import React, { useEffect, useState } from "react";
import customAxios from "../../store/AxiosConfig";
import Tooltip from "@mui/material/Tooltip";
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

  //we are calling same api becuase the api is controll both  like if the note is in the note section it 
  // make to bin if it is in the bin move to note when hitting the  end point
  const moveNoteToNote = async (noteId) =>{
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
    

      {notes.map((note) => (
        <div key={note.noteId} className="   note mx-2 my-2 card w-100"
        
        style={{backgroundColor : note.noteColor && note.noteColor.color}}
        >
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
                  <i 
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

export default DeletedNotes;
