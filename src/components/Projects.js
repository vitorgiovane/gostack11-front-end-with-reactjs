import React from 'react'

import Project from './Project'

const Projects = ({ projects }) => {
  return (
    <ul>
      {projects.map(project => <Project project={project} />)}
    </ul>
  )
}

export default Projects
