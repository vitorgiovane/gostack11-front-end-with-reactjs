import React from 'react'

const NewProject = ({
  handleProjectName,
  handleProjectOwner,
  handleAddProject,
  handleKeyPressed
}) => {
  return (
    <footer>
      <div className="project-form">
        <input
          className="new-project-name"
          type="text"
          onChange={handleProjectName}
          onKeyPress={handleKeyPressed}
        />
        <input
          className="new-project-owner"
          type="text"
          onChange={handleProjectOwner}
          onKeyPress={handleKeyPressed}
        />

        <button type='button' onClick={handleAddProject}>Add project</button>
      </div>
    </footer>
  )
}

export default NewProject
