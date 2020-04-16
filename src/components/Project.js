import React from 'react'

const Project = ({ project }) => {
  return <li key={project.id}><strong>{project.name}</strong> - {project.owner}</li>
}

export default Project
