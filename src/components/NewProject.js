import React from 'react'

const NewProject = ({ handleProjectName, handleProjectOwner, handleAddProject }) => {
  return (
    <div className="project-form">
      <div className="form-row new-project-name">
        <span>New project name: </span>
        <input type="text" onChange={handleProjectName} />
      </div>
      <div className="form-row new-project-owner">
        <span>New project owner: </span>
        <input type="text" onChange={handleProjectOwner} />
      </div>
      <button type='button' onClick={handleAddProject}>Add project</button>
    </div>
  )
}

export default NewProject
