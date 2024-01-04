import "../Notes/CreatedNote.css";
import React, { useEffect, useState } from "react";
import "../Notes/CreatedNote.css";
import customAxios from "../../store/AxiosConfig";
function CreatedNotes() {
  const [notes, setNotes] = useState([]);

  // useEffect(() => {

  //   const fetchNotes = async () => {
  //     try {

  //       const response = await customAxios.get( "/users/getNote",
  //       );
  //       console.log(response.data.notes)
  //       setNotes(response.data.notes);
  //     } catch (error) {
  //       console.error("Error fetching notes:", error);
  //     }
  //   };

  //   fetchNotes();
  // }, []);

  const getNotes = async () => {
    try {
      const response = await customAxios.get("/users/getNote");
      console.log(response.data.notes);
      setNotes(response.data.notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <div className="row notes ">
      <h5 onClick={getNotes}>created notes</h5>

      {notes.map((note) => (
        <div key={note.id} className="   note mx-2 my-2 card w-100">
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
                <i className="bx bx-trash"></i>{" "}
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
                <i className="bx bx-archive"></i>{" "}
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
