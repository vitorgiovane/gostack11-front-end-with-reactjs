import React from 'react'

const Project = ({ project }) => {
  return (
    <li key={project.id}>
      <strong>{project.name}</strong>
      <span>{project.owner}</span>
    </li>
  )
}

export default Project
