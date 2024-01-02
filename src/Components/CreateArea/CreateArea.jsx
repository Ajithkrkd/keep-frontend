import "../CreateArea/CreateArea.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import toast from "react-hot-toast";

const YourComponent = () => {
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
  const saveNote = () => {
    const trimmedTitle = title.trim();
    const trimmedSubtitle = subtitle.trim();
    if (trimmedTitle === "" && trimmedSubtitle === "") {
      localStorage.clear();
      toast.error("Note is blank");
      return;
    } else {
      console.log(trimmedSubtitle, trimmedTitle, "haio");
      jsonStringTitle = JSON.stringify(trimmedTitle);
      jsonStringsubTitle = JSON.stringify(trimmedTitle);
      
      localStorage.setItem("subtitle", jsonStringsubTitle);
      localStorage.setItem("title", jsonStringTitle);
      toast.success("success");
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
            margin:"auto"
            
            
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

export default YourComponent;
