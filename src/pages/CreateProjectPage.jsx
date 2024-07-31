import "./CreateProjectPage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiUrl =
  "https://project-management-api-4641927fee65.herokuapp.com/projects";

function CreateProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function postNewProject(event) {
    event.preventDefault();

    const newProject = { title, description };

    axios
      .post(apiUrl, newProject)
      .then(() => navigate("/projects"))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <h1>Create a new project</h1>
      <form onSubmit={postNewProject}>
        <label>Title:</label>
        <input
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
        />
        <label>Description:</label>
        <textarea
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
        />
        <button>Create</button>
      </form>
    </>
  );
}

export default CreateProjectPage;
