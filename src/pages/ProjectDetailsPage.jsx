import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl =
  "https://project-management-api-4641927fee65.herokuapp.com/projects/";

function ProjectDetailsPage() {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  const getProject = () => {
    axios
      .get(apiUrl + projectId + "?_embed=tasks")
      .then((response) => setProject(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProject();
  }, []);

  if (!project) {
    return <h2>Loading project...</h2>;
  } else {
    return (
      <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <ul>
          {project.tasks.map((eachTask) => {
            return (
              <li key={eachTask.id}>
                <h4>{eachTask.title}</h4>
                <p>{eachTask.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProjectDetailsPage;
