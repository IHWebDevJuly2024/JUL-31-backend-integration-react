import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Warning from "../components/Warning";
import axios from "axios";
import "./ProjectListPage.css";

// we want to display all the projects from the API HERE.
const apiUrl =
  "https://project-management-api-4641927fee65.herokuapp.com/projects/";

export const ProjectListPage = () => {
  const [projects, setProjects] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const getAllProjects = () => {
    axios
      .get(apiUrl)
      .then((response) => setProjects(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  const deleteProject = () => {
    axios
      .delete(apiUrl + idToDelete)
      .then(() => {
        getAllProjects();
        setShowWarning(false);
      })
      .catch((error) => console.error(error));
  };

  const displayWarning = (id) => {
    console.log("Display warning");
    setShowWarning(true);
    setIdToDelete(id);
  };

  return (
    <>
      {showWarning && (
        <Warning
          deleteProject={deleteProject}
          idToDelete={idToDelete}
          setShowWarning={setShowWarning}
        />
      )}
      <ul className="container-projects">
        {projects.map(({ id, title, description }) => {
          return (
            <li key={id} className="project">
              <Link to={`/projects/${id}`}>
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
              <div className="btn-container">
                <Link to={`/projects/edit/${id}`}>
                  <button>✏️</button>
                </Link>
                <button onClick={() => displayWarning(id)}>🗑️</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
