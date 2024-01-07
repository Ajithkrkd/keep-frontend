import "../Notes/CreatedNote.css";
import React, { useEffect, useState } from "react";
import "../Notes/CreatedNote.css";
import customAxios from "../../store/AxiosConfig";
import toast from "react-hot-toast";
function CreatedNotes() {
  const [notes, setNotes] = useState([]);
  const [backgroundColors, setBackgorundColors] = useState([]);
  useEffect(() => {
    getNotes();
    fetchBackgroundColors();
  }, []);


 const fetchBackgroundColors = async()=>{
  try {
    const response = await customAxios.get(
      "/users/note/getAllBackgroundColors"
    );
    console.log(response.data.colors);
    setBackgorundColors(response.data.colors);
  } catch (error) {
    console.log(error);
  }
 }



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

  const moveNoteTobin = async (noteId) => {
    try {
      const response = await customAxios.post(`/users/note/delete/${noteId}`);
      console.log(response);
      setNotes((prevNotes) =>
        prevNotes.filter((note) => note.noteId !== noteId)
      );

      toast.success("note move to bin");
    } catch (error) {
      console.log(response);
    }
  };
  //Archive note

  const moveNoteToArchive = async (noteId) => {
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

  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handlePaletteClick = (noteId) => {
    setSelectedNoteId(noteId);
  };

 const changeNoteColor = async (id ,noteId) => {
  console.log(id ,'color id ' , noteId)
  try {
    const response = await customAxios.post(`/users/note/changeNoteColor/${id}/${noteId}`)
    console.log(response);
    toast.success("color changed")
    getNotes();
    setSelectedNoteId(null)
  } catch (error) {
    console.log(error);
  }

 }


 
  const renderColorPalette = (noteId) => {
    console.log('note id is here : ', noteId)
    return (
      <div className="color-palette">
        <div>
          <ul className="d-flex justify-content-between">
            {backgroundColors.map((c) => (
              
              <li
                key={c.id}
                onClick={()=>changeNoteColor(c.id ,noteId )}
                style={{ listStyle: "none" }}
              >
                <span
                  className="color-span"
                  style={{
                    backgroundColor:c.color,
                    borderRadius: "50px",
                    padding: "17px",
                  }}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="row notes ">
      

      {notes.map((note) => (
        <div key={note.noteId} className="   note mx-2 my-2 card w-100"
        
       style={{
        backgroundColor : note.noteColor && note.noteColor.color
       }}

        >
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
                <i
                  className="bx bx-palette"
                  onClick={() => {
                    handlePaletteClick(note.noteId);
                  }}
                ></i>{" "}
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
                <i
                  className="bx bx-archive"
                  onClick={() => moveNoteToArchive(note.noteId)}
                ></i>{" "}
              </li>
              <li>
                {" "}
                <i className="bx bx-bell"></i>{" "}
              </li>
            </ul>
          </div>
          {selectedNoteId && selectedNoteId === note.noteId && (
            <div className="palette-customization">
              <p>select color</p>
              {renderColorPalette(note.noteId)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CreatedNotes;
