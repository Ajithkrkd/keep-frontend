import "../CreateArea/CreateArea.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
// import api from '/src/store/AxiosConfig.js'; 


const CreateArea = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  //Save Note here
  const saveNote = async () => {
    const trimmedTitle = title.trim();
    const trimmedSubtitle = subtitle.trim();

    if (trimmedTitle === "" || trimmedSubtitle === "") {
      
      toast.error("Note is blank");
      return;
    }
     else if (trimmedTitle !== "" && trimmedSubtitle !== "") {


      const noteData = {
        title: trimmedTitle,
        subTitle: trimmedSubtitle,
      };
      
      const userToken = localStorage.getItem("accessToken");
      console.log(userToken)

      if (!userToken) {
        toast.error("User token not available");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
        console.log(config)
        console.log(noteData)

        try {
          const response = await axios.post(
            "http://localhost:9000/api/users/createNote",
            noteData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
          );
          
          if (response) {
            console.log(response, "hai here is the response");
           
    
          } else {
            console.error("Registration failed");
          }
        } catch (error) {
          toast.error(error.response.data.error)
          console.error("Error during registration:", error);
        }
    }
  };

  return (
    <>
      <Button
        className="createNote mt-3 mx-3"
        variant="contained"
        color="primary"
        onClick={handleModalOpen}
      >
        Create Note
      </Button>

      <Modal
        open={showModal}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        centered
      >
        <div
          style={{
            padding: "20px",
            maxWidth: "500px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            height: "auto",
            margin: "auto",
          }}
        >
          <Typography className="text-center">Take a Note...</Typography>
          <TextField
            id="title"
            label="Title"
            variant="standard"
            fullWidth
            value={title}
            onChange={handleTitleChange}
            multiline
          />
          <TextField
            id="subtitle"
            label="Subtitle"
            variant="standard"
            fullWidth
            multiline
            value={subtitle}
            onChange={handleSubtitleChange}
          />
          <div style={{ marginTop: "16px", textAlign: "right" }}>
            <Button
              variant="outlined"
              onClick={handleModalClose}
              style={{ marginRight: "8px" }}
            >
              Close
            </Button>
            <Button variant="contained" color="primary" onClick={saveNote}>
              Save changes
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateArea;
