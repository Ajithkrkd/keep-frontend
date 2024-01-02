import "../Notes/CreatedNote.css";
import React, { useEffect, useState } from "react";
import "../Notes/CreatedNote.css";

function CreatedNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Set data in local storage for testing purposes
    const newNotes = [
      {
        id: 1,
        title: "Personal",
        subtitle:
          "hey iam ajith nothing to say man alway be happy to stay every were",
      },
      { id: 2,
         title: "java spring boot",
          subtitle: "iam ok" },
      { id: 3,
         title: "Mern Stack",
          subtitle: "iam ok js scripts" },
      
    ];

    // Retrieve data from local storage
    localStorage.setItem("notes", JSON.stringify(newNotes));

    // Retrieve notes from local storage
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // Update state with retrieved notes
    setNotes(storedNotes);
  }, []);

  return (
    <div className="row notes ">
      <h5>created notes</h5>

      {notes.map((note) => (
        <div key={note.id} className="  col note mx-4  card">
          <div className="">
            <h4>{note.title}</h4>
          </div>
          <div className="">
            <p>{note.subtitle}</p>
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
