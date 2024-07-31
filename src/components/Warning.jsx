import "./Warning.css"

function Warning({ setShowWarning, idToDelete, deleteProject }) {
  return (
    <div className="layout">
      <div className="warning-card">
        <p>Do you want tot delete the project {idToDelete}?</p>
        <button onClick={deleteProject}>Yes</button>
        <button onClick={() => setShowWarning(false)}>No</button>
      </div>
    </div>
  );
}

export default Warning;
