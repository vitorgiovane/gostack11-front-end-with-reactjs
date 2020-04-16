import React from 'react'

import Project from './Project'

const Projects = ({ projects }) => {
  return (
    <ul>
      {projects.map(project => <Project key={project.id} project={project} />)}
    </ul>
  )
}

export default Projects
