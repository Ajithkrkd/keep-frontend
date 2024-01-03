import "../Notes/CreatedNote.css";
import React, { useEffect, useState } from "react";
import "../Notes/CreatedNote.css";
import axios from "axios";
function CreatedNotes() {
  const [notes, setNotes] = useState([]);


  useEffect(() => {

    const fetchNotes = async () => {
      try {
        const userToken = localStorage.getItem("accessToken");
        console.log(userToken)
  
        if (!userToken) {
          toast.error("User token not available");
          return;
        }
        console.log(userToken , 'this is token')
       
        const response = await axios.get( "http://localhost:9000/api/users/getNote",
          { 
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            }
          }
        );
        console.log(response.data.notes)
        setNotes(response.data.notes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } 
    };

    fetchNotes();
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
