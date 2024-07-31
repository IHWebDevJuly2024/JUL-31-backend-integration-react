import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const apiUrl =
  "https://project-management-api-4641927fee65.herokuapp.com/projects/";

function EditProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { projectId } = useParams();

  function putEditedProject(event) {
    event.preventDefault();

    const editedProject = { title, description };

    axios
      .put(apiUrl + projectId, editedProject)
      .then(() => navigate("/projects"))
      .catch((error) => console.error(error));
  }

  function getProject() {
    axios
      .get(apiUrl + projectId)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      <h1>Edit project</h1>
      <form onSubmit={putEditedProject}>
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
        <button>Edit</button>
      </form>
    </>
  );
}

export default EditProjectPage;
