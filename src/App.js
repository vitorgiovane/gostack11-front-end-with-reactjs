import React, { useState } from 'react'

import './App.css'
import backgroundImage from './assets/tree.jpg'

import Header from './components/Header'

const App = () => {
  const [projects, setProjects] = useState(['Desenvolvimento de Apps', 'Design gráfico', 'Devops'])

  const handleAddProject = () => {
    setProjects([...projects, `Project ${Date.now()}`])
  }

  return (
    <>
      <Header title="Projects" />
      <img src={backgroundImage} width={300} />
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type='button' onClick={handleAddProject}>Add project</button>
    </>
  )
}

export default App
